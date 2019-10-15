import React from 'react';

import { Title } from 'react-admin'; 

import { makeStyles } from '@material-ui/core/styles';

import BaseChart from '../../components/Chart/BaseChart';
import PieChart from '../../components/Charts/VictoryCharts/PieChart'
import BarChart from '../../components/Charts/VictoryCharts/BarChart'
import FilterBar from '../../components/Chart/FilterBar';

import MovieIcon from '@material-ui/icons/Movie';
import DevicesIcon from '@material-ui/icons/Devices';

import { Grid } from '@material-ui/core';

import { buildDeviceQuery, buildMovieQuery } from '../../components/DataQuery/Queries'

import mockRokuDimensional from '../../mocks/data/roku-dimensional';
import mockMoviesDimensional from '../../mocks/data/movies-dimensional';

import cubejs from '@cubejs-client/core';

// for development purposes - easily switch between mock and real data
const USE_MOCK = false;

const API_URL = 'http://localhost:4000';
const cubejsApi = cubejs(
    process.env.REACT_APP_CUBE_API,
    {
        apiUrl: API_URL + '/cubejs-api/v1',
    }
);

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        borderRadius: 0
    }
}));


const HomeList = () => {
    const classes = useStyles();

    const INITIAL_MOVIE_COUNT = 20;
    const MIN_MOVIE_COUNT = 1;
    const MAX_MOVIE_COUNT = 20;
    const numMovies = 20;

    const [ movieCount, changeMovieCount ] = React.useState(INITIAL_MOVIE_COUNT);
    const [ selectedItem, changeSelectedItem ] = React.useState();
    const [ isInteractive, changeIsInteractive ] = React.useState("true");

    const handleSelectItem = (item) => {
        changeSelectedItem(item);
    };

    const handleDeleteFilterSelection = () => {
        changeSelectedItem();
    }

    const handleToggle = (evt, value) => {
        if(!value) {
            handleDeleteFilterSelection();
        }
        changeIsInteractive(value);
    }

    return (
        <div className={classes.root}>
            <Title title={`Dashboard`} />
            <FilterBar
                isInteractive={isInteractive}
                selectedItemLabel={selectedItem && selectedItem.x}
                handleToggle={handleToggle}
                handleDeleteFilterSelection={handleDeleteFilterSelection}
            />
            <Grid container spacing={3}>
                {/* Pie Chart: Device Activity */}
                <BaseChart
                    Chart={PieChart}
                    Icon={DevicesIcon}

                    title={"Device Activity"}
                    chartId={"pie-devices"}
                    measureTitle={"Count"}
                    dimensionTitle={"Model"}

                    cubejsApi={cubejsApi}
                    buildQuery={buildDeviceQuery}

                    useMock={USE_MOCK}
                    mockData={mockRokuDimensional}

                    handleSelectItem={handleSelectItem}
                    isInteractive={isInteractive}
                    selectedItem={selectedItem}
                />
                {/* Bar Chart: Top Movies */}
                <BaseChart
                    Chart={BarChart}
                    Icon={MovieIcon}

                    title={"Top Movies"}
                    chartId={"bar-movies"}
                    measureTitle={"Count"}
                    dimensionTitle={"Title"}

                    cubejsApi={cubejsApi}
                    buildQuery={buildMovieQuery}

                    useMock={USE_MOCK}
                    mockData={mockMoviesDimensional}

                    handleSelectItem={handleSelectItem}
                    isInteractive={isInteractive}
                    selectedItem={selectedItem}
                />
            </Grid>
        </div>
    )
}

export default HomeList;
