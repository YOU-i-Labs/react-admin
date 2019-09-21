import React from 'react';
import { QueryRenderer } from '@cubejs-client/react';
import cubejs from '@cubejs-client/core';
import { Spin } from 'antd';

const API_URL = 'http://localhost:4000';
const cubejsApi = cubejs(
    process.env.REACT_APP_CUBE_API, 
    {
        apiUrl: API_URL + '/cubejs-api/v1',
    }
);

const renderChart = Component => ({ resultSet, error }) =>
    (resultSet && <Component resultSet={resultSet} />) ||
    (error && error.toString()) || <Spin />;

const QueryExecutor = ({ queryString, chartType }) => (
    <QueryRenderer
        query={queryString}
        cubejsApi={cubejsApi}
        render={renderChart(chartType)}
    />
);

export default QueryExecutor;
