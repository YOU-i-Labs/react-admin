import React from "react";
import { ResponsivePie } from '@nivo/pie'


const PieChart = ({ resultSet }) => {
    const dimensionKey = resultSet.loadResponse.query.dimensions[0]
    const measureKey = resultSet.loadResponse.query.measures[0]
    const dimensionTitle = resultSet.loadResponse.annotation.dimensions[dimensionKey].shortTitle

    const data = resultSet.loadResponse.data.map(obj => {
        return {
            'id': obj[dimensionKey],
            'label': [dimensionTitle],
            'value': parseInt(obj[measureKey])
        }
    })
    const theme = {
        labels: {
            text: {
                fontSize: 15
            }
        },
        tooltip: {
            container: {
                background: '#333'
            }
        }
    };

    return (
        <div style={{ height: 300, width: '100%' }}>
            <ResponsivePie
                data={data}
                margin={{ top: 20, right: 10, bottom: 10, left: 10 }}
                sortByValue={true}
                innerRadius={0.5}
                padAngle={1}
                cornerRadius={5}
                colors={{ scheme: 'set2' }}
                borderWidth={5}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabelsSkipAngle={10}
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
                    <strong style={{ color }}>
                        {id}: {value}
                    </strong>
                )}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                theme={theme}
            />
        </div>
    )
}

export default PieChart