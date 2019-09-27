import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import QueryExecutor from '../../components/QueryExecutor/QueryExecutor';
import NivoPieChart from '../../components/Charts/PieChart/NivoPieChart'
import NivoBarChart from '../../components/Charts/BarChart/NivoBarChart'
import CardIcon from './CardIcon';
import MovieIcon from '@material-ui/icons/Movie';
import MovieTwoToneIcon from '@material-ui/icons/MovieTwoTone'
import AirplayIcon from '@material-ui/icons/Airplay';

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

const queryDevice = {
    "measures": [
        "Sessions.count"
    ],
    "timeDimensions": [],
    "dimensions": [
        "Sessions.manufacturemodel"
    ],
    "filters": [
        {
            "dimension": "Sessions.manufacturemodel",
            "operator": "set"
        }
    ]
}

const queryMovie = {
    measures: ['Sessions.count'],
    timeDimensions: [],
    dimensions: ['Sessions.title'],
    filters: [
        {
            dimension: 'Sessions.title',
            operator: 'set',
        },
        {
            dimension: 'Sessions.eventtype',
            operator: 'equals',
            values: ['playStart'],
        },
    ],
    limit: 10,
};

const HomeList = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <CardIcon Icon={AirplayIcon} bgColor="#db373e" />
                    <Paper className={classes.paper}>
                        <div>
                            <h2>Device Activity</h2>
                            <QueryExecutor queryString={queryDevice} chartType={NivoPieChart} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <CardIcon Icon={MovieIcon} bgColor="#db373e" />
                    <Paper className={classes.paper}>
                        <div>
                            <h2>Movie Viewership</h2>
                            <QueryExecutor queryString={queryMovie} chartType={NivoBarChart} />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeList;
