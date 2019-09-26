import React from 'react';
import { QueryRenderer } from '@cubejs-client/react';
import cubejs from '@cubejs-client/core';
import { CircularProgress } from '@material-ui/core';

const API_URL = 'http://localhost:4000';
const cubejsApi = cubejs(
    process.env.REACT_APP_CUBE_API, 
    {
        apiUrl: API_URL + '/cubejs-api/v1',
    }
);

const renderChart = Component => ({ resultSet, error }) =>
    (resultSet && <Component resultSet={resultSet} />) ||
    (error && error.toString()) || <CircularProgress color="secondary" />;

const QueryExecutor = ({ queryString, chartType }) => (
    <QueryRenderer
        query={queryString}
        cubejsApi={cubejsApi}
        render={renderChart(chartType)}
    />
);

export default QueryExecutor;
