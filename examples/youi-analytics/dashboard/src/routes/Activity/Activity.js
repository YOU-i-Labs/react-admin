import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import NivoBarChart from '../../components/Charts/PieChart/NivoPieChart'


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
    return <QueryExecutor queryString={queryDevice} chartType={NivoBarChart} />;
};

export default ActivityList;
