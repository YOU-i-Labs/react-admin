import React from 'react';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import AreaChart from '../../components/Charts/ApexCharts/AreaChart'
import * as Constants from '../../components/DataQuery/Queries'
import { Title } from 'react-admin';

const UserSessionsList = () => {
    return (
        <div>
            <Title title="User Sessions" />
            <h2>User Sessions</h2>
            <QueryExecutor queryString={Constants.queryEnginesUsedByDay} chartType={AreaChart} />
        </div>
    );
};

export default UserSessionsList;
