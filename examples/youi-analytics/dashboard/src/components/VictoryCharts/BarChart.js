import React from "react"
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup
} from "victory";
import { makeStyles } from '@material-ui/core/styles';

import ChartInfoPane from './ChartInfoPane';

const BarChart = (props) => {
    const [lastClicked, setLastClicked] = React.useState();

    let data;
    if(props.resultSet) {
        // using real data
        data = transformData(props.resultSet);
    } else {
        // using mock data
        data = transformMockData(props.mockData);
    }

    return (
        <div>
            <VictoryChart domainPadding={7}>
                <VictoryAxis
                    fixLabelOverlap={true}
                />
                 <VictoryAxis
                    dependentAxis
                    fixLabelOverlap={true}
                />
                <VictoryGroup colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}>
                <VictoryBar
                    data={data}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: (e, item) => {
                                setLastClicked(item.datum);
                            },
                            onMouseOver: () => {
                                return [{
                                    target: "data",
                                    mutation: ({style}) => {
                                        return { style: Object.assign({ cursor: 'pointer'}, style) };
                                    }
                                }];
                            }
                        }
                    }]}
                    />
                </VictoryGroup>
            </VictoryChart>
            <ChartInfoPane data={lastClicked} />
        </div>
    )
}

const transformData = (resultSet) => {
    const dimensionKey = resultSet.loadResponse.query.dimensions[0]
    const measureKey = resultSet.loadResponse.query.measures[0]

    return resultSet.loadResponse.data.map(obj => {
        return {
            'x': obj[dimensionKey],
            'y': parseInt(obj[measureKey])
        }
    })
}

const transformMockData = (mockData) => {
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

export default BarChart