import React from "react"
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup
} from "victory";
import { makeStyles } from '@material-ui/core/styles';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(() => ({
    infoPane: {
        height: '200px'
    }
}));

const BarChart = (props) => {
    const [lastClicked, setLastClicked] = React.useState({});
    const classes = useStyles();

    let data;
    if(props.resultSet) {
        // using real data, transform
        data = transformData(props.resultSet);
    } else {
        // using mock data, use as-is
        data = props.mockData;
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
                                setLastClicked({x: item.datum.x, y: item.datum.y});
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
                    // style={{ data: { fill: '#ec1c24' } }}
                    />
                </VictoryGroup>
            </VictoryChart>
            <div className={classes.infoPane}>{lastClicked.x}<br></br>{lastClicked.y}</div>
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

export default BarChart