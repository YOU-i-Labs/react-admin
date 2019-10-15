import React from 'react';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import HeatMap from "../../components/Charts/GoogleMap/HeatMap"
import * as Constants from '../../components/DataQuery/Queries'
import { Title } from 'react-admin'; 

const LocationList = () => {
  return (
    <div>
      <Title title="Geolocation" />
      <h2>Geolocation</h2>
      <QueryExecutor queryString={Constants.queryGeoLocation} chartType={HeatMap} />
    </div>
  );
};

export default LocationList;
