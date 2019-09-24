import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import NivoBarChart from '../../components/Charts/BarChart/NivoBarChart'



const queryMovie = {
    measures: ['Sessions.count'],
    timeDimensions: [],
    dimensions: ['Sessions.title'],
    filters: [
        {
            dimension: 'Sessions.title',
            operator: 'set',
        },
        {
            dimension: 'Sessions.eventtype',
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
