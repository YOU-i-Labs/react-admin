import React from 'react'
import { ResponsiveLine } from '@nivo/line'


const LineChart = ({ resultSet }) => {
  const data = [
    {
      id: 'Engines Used',
      data: resultSet.loadResponse.data.map(obj => {
        return {
          x: obj['EnginesUsed.timestamp'].slice(0, 10),
          y: parseInt(obj['EnginesUsed.enginesUsedAvg'])
        }
      })
    }
  ]

  const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
    <g>
      <circle fill="#fff" r={size / 4} strokeWidth={borderWidth} stroke={borderColor} />
      <circle r={size / 7} strokeWidth={borderWidth} stroke={borderColor} fill={color} fillOpacity={0.35} />
    </g>
  );

  // Render chart
  return (
    <div style={{ height: 350, width: '100%' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 15, bottom: 50, left: 15 }}
        curve="catmullRom"
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          stacked: false,
        }}
        axisLeft={null}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 4 days',
        }}
        axisTop={null}
        axisRight={null}
        enablePointLabel={true}
        pointSymbol={CustomSymbol}
        pointSize={16}
        pointBorderWidth={1}
        pointBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.3]],
        }}
        useMesh={true}
        enableSlices={false}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        areaOpacity={0.65}
        colors={{ scheme: 'set1' }}
      />
    </div>
  )
}

export default LineChart


