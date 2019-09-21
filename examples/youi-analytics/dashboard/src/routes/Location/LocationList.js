import React from 'react';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import HeatMap from "../../components/Charts/HeatMap/HeatMap"


const queryGeoLocation = {
    "dimensions": [
      "Rawtemp.latitude",
      "Rawtemp.longitude"
    ],
    "timeDimensions": [],
    "filters": [
      {
        "dimension": "Rawtemp.latitude",
        "operator": "set"
      },
      {
        "dimension": "Rawtemp.longitude",
        "operator": "set"
      },
      {
        "dimension": "Rawtemp.latitude",
        "operator": "notContains",
        "values": [
          "null"
        ]
      },
      {
        "dimension": "Rawtemp.longitude",
        "operator": "notContains",
        "values": [
          "null"
        ]
      }
    ],
    "measures": []
  }
  

const LocationList = () => {
    return <QueryExecutor queryString={queryGeoLocation} chartType={HeatMap} />;
};

export default LocationList;
