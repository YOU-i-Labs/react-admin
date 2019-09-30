import React from 'react';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import PieChart from '../../components/Charts/PieChart'
import * as Constants from '../../components/DataQuery/Queries'

const ActivityList = () => {
  return (
    <div>
      <h2>Device Activity</h2>
      <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
    </div>
  );
};

export default ActivityList;
