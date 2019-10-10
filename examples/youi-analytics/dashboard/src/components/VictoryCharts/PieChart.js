import React from "react"
import {
    VictoryChart,
    VictoryPie,
    Slice,
    VictoryLabel
} from "victory";
import { makeStyles } from '@material-ui/core/styles';

import ChartInfoPane from '../Chart/ChartInfoPane';

import {
    transformData,
    transformMockData,
    createPieEventHandlers
} from '../Chart/ChartUtils';

class CustomLabel extends React.Component {
    render() {
        return (
            <g>
                <VictoryLabel {...this.props}/>
            </g>
        );
    }
  }

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
        <div onClick={() => { setLastClicked() }}>
            <VictoryChart
                containerComponent={
                    <VictoryPie
                        dataComponent={
                            <Slice/>
                        }
                        data={data}
                        events={createPieEventHandlers(setLastClicked)}
                        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                        labelComponent={<CustomLabel {...props}/>}
                />}
            />
            <ChartInfoPane dataItem={lastClicked} />
        </div>
    )
}

export default PieChart