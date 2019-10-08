import React from 'react';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import PieChart from '../../components/NivoCharts/PieChart'
import * as Constants from '../../components/DataQuery/Queries'
import { Title } from 'react-admin'; 

const ActivityList = () => {
  return (
    <div>
      <Title title="Activity" />
      <h2>Device Activity</h2>
      <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
    </div>
  );
};

export default ActivityList;
