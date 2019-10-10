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

const PieChart = (props) => {
    const { resultSet, mockData, onSelectItem, chartId } = props;
    const [lastClicked, setLastClicked] = React.useState();

    const handleDataClick = (item) => {
        const selected = item ? Object.assign(item, { chartId }) : item;
        onSelectItem(selected);
        setLastClicked(selected);
    }

    let data;
    if(resultSet) {
        // using real data
        data = transformData(resultSet);
    } else {
        // using mock data
        data = transformMockData(mockData);
    }

    return (
        <div onClick={() => { handleDataClick() }}>
            <VictoryChart
                containerComponent={
                    <VictoryPie
                        dataComponent={
                            <Slice/>
                        }
                        data={data}
                        events={createPieEventHandlers(handleDataClick)}
                        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                />}
            />
            <ChartInfoPane dataItem={lastClicked} />
        </div>
    )
}

export default PieChart