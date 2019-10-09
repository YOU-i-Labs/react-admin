import React from "react"
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup
} from "victory";
import { makeStyles } from '@material-ui/core/styles';

import {
    transformData,
    transformMockData,
    createEventHandlers,
    getLastClickedDataItem
} from './ChartUtils';

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
        <div onClick={() => { setLastClicked() }}>
            <VictoryChart domainPadding={7}>
                <VictoryAxis
                    fixLabelOverlap={true}
                    events={createEventHandlers("tickLabels", setLastClicked)}
                />
                 <VictoryAxis
                    dependentAxis
                    fixLabelOverlap={true}
                />
                <VictoryGroup colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}>
                <VictoryBar
                    data={data}
                    events={createEventHandlers(["data", "labels"], setLastClicked)}
                    />
                </VictoryGroup>
            </VictoryChart>
            <ChartInfoPane dataItem={getLastClickedDataItem(lastClicked, data)} />
        </div>
    )
}

export default BarChart