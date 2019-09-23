import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import NivoBarChart from '../../components/Charts/BarChart/NivoBarChart'

const queryMovie = {
    measures: ['Rawtemp.count'],
    timeDimensions: [],
    dimensions: ['Rawtemp.title'],
    filters: [
        {
            dimension: 'Rawtemp.title',
            operator: 'set',
        },
        {
            dimension: 'Rawtemp.eventtype',
            operator: 'equals',
            values: ['playStart'],
        },
    ],
    limit: 10,
};

const ViewedList = () => {
    return (
        <div>
            <h2>Movie Viewership</h2>
            <QueryExecutor queryString={queryMovie} chartType={NivoBarChart} />
        </div>
    );
};

export default ViewedList;
