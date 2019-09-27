import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import BarChart from '../../components/Charts/BarChart'
import * as Constants from '../../components/DataQuery/Queries'

const ViewedList = () => {
    return (
        <div>
            <h2>Movie Viewership</h2>
            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
        </div>
    );
};

export default ViewedList;
