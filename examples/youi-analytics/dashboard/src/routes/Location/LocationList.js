import React from 'react';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import HeatMap from "../../components/Charts/HeatMap"
import * as Constants from '../../components/DataQuery/Queries'



const LocationList = () => {
  return (
    <div>
      <h2>Geolocation</h2>
      <QueryExecutor queryString={Constants.queryGeoLocation} chartType={HeatMap} />
    </div>
  );
};

export default LocationList;
