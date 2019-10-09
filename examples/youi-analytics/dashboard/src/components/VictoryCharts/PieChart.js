import React from "react"
import {
    VictoryChart,
    VictoryPie,
    Slice
} from "victory";
import { makeStyles } from '@material-ui/core/styles';

import ChartInfoPane from './ChartInfoPane';

const PieChart = (props) => {
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
            <VictoryChart
                containerComponent={
                    <VictoryPie
                        dataComponent={
                            <Slice/>
                        }
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

                        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                />}
            />
            <ChartInfoPane data={lastClicked} />
        </div>
    )
}

const transformData = (resultSet) => {
    const dimensionKey = resultSet.loadResponse.query.dimensions[0]
    const measureKey = resultSet.loadResponse.query.measures[0]

    return resultSet.loadResponse.data.map(dataItem => {
        return {
            'x': dataItem[dimensionKey],
            'y': parseInt(dataItem[measureKey])
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

export default PieChart