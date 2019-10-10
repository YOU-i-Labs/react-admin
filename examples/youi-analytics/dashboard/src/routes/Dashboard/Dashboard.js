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
                            <PieChart mockData={mockRokuDimensional}/> :
                            <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
                        }
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <ChartHeader
                            title={"Movie Viewership"}
                            iconComponent={MovieIcon}/>
                        { USE_MOCK ?
                            <BarChart mockData={mockMoviesDimensional}/> :
                            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeList;
