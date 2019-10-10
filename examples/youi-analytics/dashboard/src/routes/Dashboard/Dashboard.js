import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import PieChart from '../../components/VictoryCharts/PieChart'
import BarChart from '../../components/VictoryCharts/BarChart'

import FilterListIcon from '@material-ui/icons/FilterListTwoTone';
import MovieIcon from '@material-ui/icons/Movie';
import DevicesIcon from '@material-ui/icons/Devices';

import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import * as Constants from '../../components/DataQuery/Queries'

import mockRokuDimensional from '../../mocks/data/roku-dimensional';
import mockMoviesDimensional from '../../mocks/data/movies-dimensional';

import { Title } from 'react-admin'; 
import ChartHeader from '../../components/Chart/ChartHeader';
import DateRangePicker from '../../components/MaterialUI/DateRangePicker';
import TopN from '../../components/MaterialUI/TopN'

// for development purposes - easily switch between mock and real data
const USE_MOCK = true;

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        borderRadius: 0,
    },
    paper: {
        padding: '0px',
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));


const HomeList = () => {
    const classes = useStyles();

    const INITIAL_MOVIE_COUNT = 10;
    const MIN_MOVIE_COUNT = 1;
    const MAX_MOVIE_COUNT = 20;
    const numMovies = mockMoviesDimensional.data.length;

    const [ movieCount, changeMovieCount ] = React.useState(INITIAL_MOVIE_COUNT);

    return (
        <div className={classes.root}>
            <Title title="Dashboard" />
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <ChartHeader
                            lightTheme
                            filterBar
                            title={"Filters"}
                            children={<DateRangePicker />}
                            iconComponent={FilterListIcon}/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <ChartHeader
                            title={"Device Activity"}
                            iconComponent={DevicesIcon}
                        />
                        { USE_MOCK ?
                            <PieChart animate mockData={mockRokuDimensional}/> :
                            <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
                        }
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <ChartHeader
                            title={"Top Movies"}
                            iconComponent={MovieIcon}
                            children={
                                <TopN
                                    lightTheme
                                    onSelectTopN={changeMovieCount}
                                    defaultValue={INITIAL_MOVIE_COUNT}
                                    min={MIN_MOVIE_COUNT}
                                    max={MAX_MOVIE_COUNT > numMovies ? numMovies : MAX_MOVIE_COUNT}
                                />
                            }/>
                        { USE_MOCK ?
                            <BarChart animate mockData={mockMoviesDimensional} topN={movieCount} /> :
                            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeList;
