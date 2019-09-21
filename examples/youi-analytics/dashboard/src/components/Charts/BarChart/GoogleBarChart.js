import Chart from 'react-google-charts';
import React from 'react';

const GoogleBarChart = ({ resultSet }) => {
    const dimensionKey = resultSet.loadResponse.query.dimensions[0];
    const measureKey = resultSet.loadResponse.query.measures[0];
    let data = resultSet.loadResponse.data.map(obj => {
        return [obj[dimensionKey], parseInt(obj[measureKey])];
    });
    data.unshift([
        'Element',
        'Viewers'
    ]);

    return (
        <Chart
            width={'100%'}
            height={'500px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                chart: {
                    title: 'Movie viewership',
                },
                bars: 'horizontal'
            }}
        />
    );
};

export default GoogleBarChart;
