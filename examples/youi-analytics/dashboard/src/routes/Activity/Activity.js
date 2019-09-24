import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import NivoPieChart from '../../components/Charts/PieChart/NivoPieChart'


const queryDevice = {
  "measures": [
    "Sessions.count"
  ],
  "timeDimensions": [],
  "dimensions": [
    "Sessions.manufacturemodel"
  ],
  "filters": [
    {
      "dimension": "Sessions.manufacturemodel",
      "operator": "set"
    }
  ]
}

const ActivityList = () => {
  return (
    <div>
      <h2>Device Activity</h2>
      <QueryExecutor queryString={queryDevice} chartType={NivoPieChart} />
    </div>
  );
};

export default ActivityList;
