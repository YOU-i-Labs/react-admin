import React from "react";
import { ResponsiveBar } from '@nivo/bar'


const NivoBarChart = ({ resultSet }) => {
    const dimensionKey = resultSet.loadResponse.query.dimensions[0]
    const measureKey = resultSet.loadResponse.query.measures[0]
    const dimensionTitle = resultSet.loadResponse.annotation.dimensions[dimensionKey].shortTitle
    const measureTitle = resultSet.loadResponse.annotation.measures[measureKey].shortTitle

    const data = resultSet.loadResponse.data.map(obj => {
        return {
            [dimensionTitle]: obj[dimensionKey],
            [measureTitle]: parseInt(obj[measureKey])
        }
    })
    const theme = {
        axis: {
            ticks: {
                text: {
                    fontSize: "14px"
                }
            }
        },
        tooltip: {
            container: {
                background: '#333'
            }
        }
    };

    return (
        <div style={{ height: 500, width: '100%' }}>
            <ResponsiveBar
                data={data}
                layout="horizontal"
                margin={{ top: 5, right: 25, bottom: 25, left: 200 }}
                keys={['Count']}
                indexBy={dimensionTitle}
                padding={0.3}
                colors={{ scheme: 'set3' }}
                colorBy="index"
                enableGridY={false}
                borderRadius={4}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['brighter', '0.3']] }}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0
                }}
                enableGridX={true}
                tooltip={({ id, value, color }) => (
                    <strong style={{ color }}>
                        {id}: {value}
                    </strong>
                )}
                labelSkipWidth={25}
                labelSkipHeight={15}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                theme={theme}
            />
        </div>
    )
}

export default NivoBarChart