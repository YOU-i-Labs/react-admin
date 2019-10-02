import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import PieChart from '../../components/Charts/PieChart'
import BarChart from '../../components/Charts/BarChart'
import CardIcon from '../../components/MaterialUI/CardIcon';
import MovieIcon from '@material-ui/icons/Movie';
import AirplayIcon from '@material-ui/icons/Airplay';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import * as Constants from '../../components/DataQuery/Queries'
import { Title } from 'react-admin'; 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const HomeList = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Title title="Dashboard" />
            <Grid container spacing={3}>
                <Grid item xs>
                    <CardIcon Icon={AirplayIcon} bgColor="#db373e" />
                    <Paper className={classes.paper}>
                        <div>
                            <h2>Device Activity</h2>
                            <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <CardIcon Icon={MovieIcon} bgColor="#db373e" />
                    <Paper className={classes.paper}>
                        <div>
                            <h2>Movie Viewership</h2>
                            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeList;
