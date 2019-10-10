import React from "react"
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLabel
} from "victory";
import numeral from 'numeral';
import { makeStyles } from '@material-ui/core/styles';

import {
    transformData,
    transformMockData,
    createEventHandlers,
    getLastClickedDataItem
} from '../Chart/ChartUtils';

import ChartInfoPane from '../Chart/ChartInfoPane';

const BarChart = (props) => {
    const { resultSet, mockData, topN, animate } = props;
    const [lastClicked, setLastClicked] = React.useState();

    let data;
    if(resultSet) {
        // using real data
        data = transformData(resultSet);
    } else {
        // using mock data
        data = transformMockData(mockData);
    }

    if(topN) {
        data = data.slice(0, topN);
    }

    return (
        <div onClick={() => { setLastClicked() }}>
            <VictoryChart domainPadding={5} padding={{top: 30, bottom: 50, left: 150, right: 40}}>
                <VictoryAxis
                    invertAxis
                    events={createEventHandlers("tickLabels", setLastClicked)}
                    style={{
                        tickLabels: {fontSize: 11}
                    }}
                    animate={animate ? { duration: 750 } : false}
                />
                 <VictoryAxis
                    dependentAxis
                    tickFormat={(t) => numeral(t).format('0.0 a')}
                    label={"Total Views"}
                    style={{
                        axisLabel: {fontSize: 11},
                        tickLabels: {fontSize: 11}
                    }}
                />
                <VictoryGroup barRatio={0.1} colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}>
                    <VictoryBar
                        horizontal
                        data={data}
                        events={createEventHandlers(["data", "labels"], setLastClicked)}
                        animate={animate ? { duration: 100 } : false}
                        />
                </VictoryGroup>
            </VictoryChart>
            <ChartInfoPane dataItem={getLastClickedDataItem(lastClicked, data)} />
        </div>
    )
}

export default BarChart