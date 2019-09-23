import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import NivoPieChart from '../../components/Charts/PieChart/NivoPieChart'


const queryDevice = {
  "measures": [
    "Rawtemp.count"
  ],
  "timeDimensions": [],
  "dimensions": [
    "Rawtemp.device"
  ],
  "filters": [
    {
      "dimension": "Rawtemp.device",
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
