import React from 'react';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import BarChart from '../../components/Charts/NivoCharts/BarChart'
import * as Constants from '../../components/DataQuery/Queries'
import { Title } from 'react-admin';

const ViewedList = () => {
    return (
        <div>
            <Title title="Viewed" />
            <h2>Movie Viewership</h2>
            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
        </div>
    );
};

export default ViewedList;
