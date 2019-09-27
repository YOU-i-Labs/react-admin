import React from "react";
import { ResponsivePie } from '@nivo/pie'
import useDimensions from "react-use-dimensions";


const PieChart = ({ resultSet }) => {
    const [chartRef, chartSize] = useDimensions();

    const dimensionKey = resultSet.loadResponse.query.dimensions[0]
    const measureKey = resultSet.loadResponse.query.measures[0]
    const dimensionTitle = resultSet.loadResponse.annotation.dimensions[dimensionKey].shortTitle

    const data = resultSet.loadResponse.data.map(obj => {
        return {
            'id': obj[dimensionKey],
            'label': obj[dimensionKey],
            'value': parseInt(obj[measureKey])
        }
    })

    const theme = {
        labels: {
            text: {
                fontSize: 13
            }
        },
        tooltip: {
            container: {
                background: '#333'
            }
        }
    };

    const legends = [
        {
            anchor: 'bottom',
            direction: 'column',
            translateX: 0,
            translateY: 150,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]

    const legendMargin = { top: 10, right: 10, bottom: 150, left: 10 }
    const labelMargin = { top: 30, right: 10, bottom: 10, left: 10 }

    return (
        <div ref={chartRef} style={{ height: 350, width: '100%' }}>
            <ResponsivePie
                data={data}
                margin={chartSize.width < 750 ? legendMargin : labelMargin}
                sortByValue={true}
                innerRadius={0.5}
                padAngle={1}
                cornerRadius={5}
                colors={{ scheme: 'set2' }}
                borderWidth={3}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                enableRadialLabels={chartSize.width < 750 ? false : true}
                radialLabelsSkipAngle={1}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={3}
                radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                tooltip={({ id, value, color }) => (
                    <strong style={{ color, fontSize:13 }}>
                        {id}: {value}
                    </strong>
                )}
                legends={chartSize.width < 750 ? legends : []}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                theme={theme}
            />
        </div>
    )
}

export default PieChart