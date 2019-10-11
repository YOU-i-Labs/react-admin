import React from 'react';

import { Title } from 'react-admin'; 

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Chip, CircularProgress } from '@material-ui/core';

import PieChart from '../../components/VictoryCharts/PieChart'
import BarChart from '../../components/VictoryCharts/BarChart'

import FilterListIcon from '@material-ui/icons/FilterListTwoTone';
import MovieIcon from '@material-ui/icons/Movie';
import DevicesIcon from '@material-ui/icons/Devices';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import * as Constants from '../../components/DataQuery/Queries'

import mockRokuDimensional from '../../mocks/data/roku-dimensional';
import mockMoviesDimensional from '../../mocks/data/movies-dimensional';

import ChartHeader from '../../components/Chart/ChartHeader';
import TopN from '../../components/MaterialUI/TopN'
import CardIcon from '../../components/MaterialUI/CardIcon';
import DateRangePicker from '../../components/MaterialUI/DateRangePicker';

import cubejs from '@cubejs-client/core';
import { QueryBuilder } from "@cubejs-client/react";

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
        borderRadius: 0,
    },
    paper: {
        padding: '0px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        'flex-direction': 'column',
    },
    chartHeader: {
        display: 'flex',
        'justify-content': 'space-between'
    },
    title: {
        'align-self': 'center',
        'margin-right': '16px'
    },
    youiTheme: {
        'background-image': 'linear-gradient(to right, #ec1c24, #d91c5c)',
        color: 'white',
    },
    lightTheme: {
        color: 'black'
    },
    filterBar: {
        padding: '8px 0px'
    },
    chip: {
        'align-self': 'center',
        'margin': '0px 8px'
    },
    filterGroup: {
        display: 'flex',
    },
    progress: {
        'margin-bottom': 'auto',
        'align-self': 'center'
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
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <div className={`${classes.chartHeader} lightTheme ${classes.filterBar}`}>
                            <div className={classes.filterGroup}>
                                <CardIcon Icon={FilterListIcon} />
                                <div className={classes.title}>{"Filter"}</div>
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={isInteractive}
                                        onChange={handleToggle}
                                        value={isInteractive}
                                        color="primary"
                                    />
                                    }
                                    label="Interactive Mode"
                                />
                                {selectedItem && isInteractive ? <Chip onDelete={handleDeleteFilterSelection} label={selectedItem.x} className={classes.chip}/> : null}
                            </div>
                            <DateRangePicker />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={`${classes.paper}`}>
                        <ChartHeader
                            title={`Device Activity${ isInteractive && selectedItem && selectedItem.chartId != "pie-devices" ? ` for ${selectedItem.x}` : ''}`}
                            iconComponent={DevicesIcon}
                        />
                        { USE_MOCK ?
                            <PieChart animate chartId={"pie-devices"} mockData={mockRokuDimensional} onSelectItem={handleSelectItem}/> :
                            <QueryBuilder
                                query={Constants.buildDeviceQuery(isInteractive && selectedItem && selectedItem.chartId != "pie-devices" ? { value: selectedItem.x, dimension: getDimension("bar-movies")} : null)}
                                cubejsApi={cubejsApi}
                                render={({ resultSet, measures, availableMeasures, updateMeasures }) => (
                                    (resultSet &&
                                    <PieChart
                                        animate
                                        chartId={"pie-devices"}
                                        resultSet={resultSet}
                                        onSelectItem={handleSelectItem}
                                        measureTitle={"Count"}
                                        dimensionTitle={"Model"}
                                    />) ||
                                    <CircularProgress className={classes.progress} color="secondary" />
                                )}
                             />
                        }
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={`${classes.paper}`}>
                        <ChartHeader
                            title={`Top Movies${ isInteractive && selectedItem && selectedItem.chartId != "bar-movies" ? ` for ${selectedItem.x}` : ''}`}
                            iconComponent={MovieIcon}
                            // children={
                            //     <TopN
                            //         lightTheme
                            //         onSelectTopN={changeMovieCount}
                            //         defaultValue={INITIAL_MOVIE_COUNT}
                            //         min={MIN_MOVIE_COUNT}
                            //         max={MAX_MOVIE_COUNT > numMovies ? numMovies : MAX_MOVIE_COUNT}
                            //     />
                            // }
                        />
                        { USE_MOCK ?
                            <BarChart animate chartId={"bar-movies"} mockData={mockMoviesDimensional} topN={movieCount} onSelectItem={handleSelectItem}/> :
                            <QueryBuilder
                                query={Constants.buildMovieQuery(isInteractive && selectedItem && selectedItem.chartId != "bar-movies" ? { value: selectedItem.x, dimension: getDimension("pie-devices")} : null )}
                                cubejsApi={cubejsApi}
                                render={({ resultSet, measures, availableMeasures, updateMeasures }) => (
                                    (resultSet &&
                                    <BarChart
                                        animate
                                        chartId={"bar-movies"}
                                        resultSet={resultSet}
                                        topN={movieCount}
                                        onSelectItem={handleSelectItem}
                                        measureTitle={"Count"}
                                        dimensionTitle={"Title"}
                                    />) ||
                                    <CircularProgress className={classes.progress} color="secondary" />
                                )}
                             />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const getDimension = (chartId) => {
    if(chartId === "bar-movies") {
        return 'SessionMoviesDevices.title';
    } else if(chartId === "pie-devices") {
        return 'SessionMoviesDevices.model';
    }
}


export default HomeList;
