import React from "react"
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryTooltip
} from "victory";
import numeral from 'numeral';
import { makeStyles } from '@material-ui/core/styles';

import {
    transformData,
    transformMockData,
    getLastClickedDataItem,
    createBarEventHandlers,
    createBarAxisEventHandlers
} from '../Chart/ChartUtils';

import ChartInfoPane from '../Chart/ChartInfoPane';

const BarChart = (props) => {
    const { resultSet, mockData, topN, animate, chartId, onSelectItem } = props;
    const [lastClicked, setLastClicked] = React.useState();

    const handleDataClick = (lastClicked) => {
        const lastClickedItem = getLastClickedDataItem(lastClicked, data)
        const selected = lastClickedItem ? Object.assign(lastClickedItem, { chartId }) : lastClickedItem;
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

    if(topN) {
        data = data.slice(0, topN);
    }

    return (
        <div onClick={() => { handleDataClick() }}>
            <VictoryChart
                domainPadding={5}
                padding={{top: 30, bottom: 50, left: 150, right: 40}}
            >
                <VictoryAxis
                    invertAxis
                    events={createBarAxisEventHandlers(handleDataClick)}
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
                        labels={({ datum }) => numeral(datum.y).format('0.0 a')}
                        labelComponent={
                            <VictoryTooltip
                                dx={-2}
                                pointerLength={0}
                                style={{ fontSize: 12 }}
                                flyoutStyle={{ fill: 'transparent', stroke: 0 }}
                            />
                        }
                        events={createBarEventHandlers(handleDataClick)}
                        animate={animate ? { duration: 100 } : false}
                        />
                </VictoryGroup>
            </VictoryChart>
            <ChartInfoPane dataItem={lastClicked} />
        </div>
    )
}

export default BarChart