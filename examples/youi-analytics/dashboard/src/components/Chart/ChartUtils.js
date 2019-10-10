export const transformData = (resultSet) => {
    const dimensionKey = resultSet.loadResponse.query.dimensions[0]
    const measureKey = resultSet.loadResponse.query.measures[0]

    return resultSet.loadResponse.data.map(obj => {
        return {
            'x': obj[dimensionKey],
            'y': parseInt(obj[measureKey])
        }
    })
}

export const transformMockData = (mockData) => {
    const dimensionKey = mockData.dimensions[0]
    const measureKey = mockData.measures[0]

    return mockData.data.map(dataItem => {
        return {
            'dimensionTitle': dimensionKey,
            'measureTitle': measureKey,
            'x': dataItem[dimensionKey],
            'y': parseInt(dataItem[measureKey])
        }
    })
}

export const getLastClickedDataItem = (lastClicked, data) => {
    let dataItem;
    if(lastClicked && !lastClicked.dimensionTitle && !lastClicked.measureTitle) {
        // handle case where lastClicked is an index - when user clicks axis
        dataItem = data[lastClicked - 1];
    } else {
        dataItem = lastClicked;
    }
    return dataItem;
}

const addPointer = ({style}) => {
    return { style: Object.assign({ cursor: 'pointer'}, style) };
};

export const createBarEventHandlers = (onClickCallback) => {
    return [{
        target: "data",
        eventHandlers: {
            onClick: (e, item) => {
                onClickCallback(item.datum);
                e.stopPropagation();
            },
            onMouseOver: () => {
                return [{
                    target: "data",
                    mutation: addPointer
                }, {
                    target: "labels",
                    mutation: () => ({ active: true })
                }];
            },
            onMouseOut: () => {
                return [{
                    target: "labels",
                    mutation: () => ({ active: false })
                }];
            }
        }
    }]
};

export const createBarAxisEventHandlers = (onClickCallback) => {
    return [{
        target: "tickLabels",
        eventHandlers: {
            onClick: (e, item) => {
                onClickCallback(item.datum);
                e.stopPropagation();
            },
            onMouseOver: () => {
                return [{
                    target: "tickLabels",
                    mutation: addPointer
                }];
            }
        }
    }];
}

export const createPieEventHandlers = (onClickCallback) => {
    return [{
        target: "data",
        eventHandlers: {
            onClick: (e, item) => {
                onClickCallback(item.datum);
                e.stopPropagation();
            },
            onMouseOver: (e, item) => {
                // console.log(e);
                // console.log(item);
                return [{
                    target: "data",
                    mutation:  ({style}) => {
                        return { style: Object.assign({
                            cursor: 'pointer',
                            stroke: 'red',
                            strokeWidth: '6'
                        }, style) };
                    }
                }, {
                    target: "labels",
                    mutation: () => ({ active: true })
                }];
            },
            onMouseOut: () => {
                return [{
                    target: "labels",
                    mutation: () => ({ active: false })
                }];
            }
        }
    }, {
        target: "labels",
        eventHandlers: {
            onClick: (e, item) => {
                onClickCallback(item.datum);
                e.stopPropagation();
            },
            onMouseOver: () => {
                const mutation = ({style}) => {
                    return { style: Object.assign({ cursor: 'pointer'}, style) };
                };

                return [{
                    target: "labels",
                    mutation
                }];
            }
        }
    }]
}