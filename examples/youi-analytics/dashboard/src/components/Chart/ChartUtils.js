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

export const createEventHandlers = (targets, onClickCallback) => {
    // convert targets to array if necessary
    const targetNames = Array.isArray(targets) ? targets : [ targets ];

    return targetNames.map((targetName) => {
        return {
            target: targetName,
            eventHandlers: {
                onClick: (e, item) => {
                    onClickCallback(item.datum);
                    e.stopPropagation();
                },
                onMouseOver: () => {
                    const addPointer = ({style}) => {
                        return { style: Object.assign({ cursor: 'pointer'}, style) };
                    };

                    return [{
                        target: targetName,
                        mutation: addPointer
                      }];
                }
            }
        }
    });
}