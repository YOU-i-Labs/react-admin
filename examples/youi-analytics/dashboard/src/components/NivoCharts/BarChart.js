import React, { useState, useEffect } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import useDimensions from 'react-use-dimensions'
import Dialog from '../MaterialUI/Dialog'


const BarChart = ({ resultSet }) => {
    // Chart Config
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

    // React Hook to measure DOM nodes to be able to hide/show chart labels in response to browser width
    const [chartRef, chartSize] = useDimensions()

    // Modal Config to view details
    const [open, setOpen] = React.useState(false)
    const [selectedData, setSelectedData] = React.useState({})
    const handleOpen = (data) => {
        setSelectedData({
            'title': data.indexValue, 
            'value': data.value,
            'color': data.color
        })
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    };

    // Render chart
    return (
        <div ref={chartRef} style={{ height: 350, width: '100%' }}>
            <ResponsiveBar
                data={data}
                layout="horizontal"
                margin={{ top: 5, right: 25, bottom: 25, left: 200 }}
                keys={['Count']}
                indexBy={dimensionTitle}
                padding={0.3}
                colors={{ scheme: 'set3' }}
                colorBy="index"
                enableGridX={false}
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
                axisBottom={chartSize.width < 750 ? null : {
                    tickPadding: 0,
                }}
                tooltip={({ id, value, color }) => (
                    <strong style={{ color, fontSize: 13 }}>
                        {id}: {value}
                    </strong>
                )}
                labelSkipWidth={25}
                labelSkipHeight={15}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                theme={theme}
                onClick={handleOpen}
            />
            <Dialog data={selectedData} open={open} onClose={handleClose} />
        </div>
    )
}

export default BarChart