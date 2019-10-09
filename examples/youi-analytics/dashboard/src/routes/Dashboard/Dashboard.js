import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import PieChart from '../../components/VictoryCharts/PieChart'
import BarChart from '../../components/VictoryCharts/BarChart'

import CardIcon from '../../components/MaterialUI/CardIcon';
import MovieIcon from '@material-ui/icons/Movie';
import AirplayIcon from '@material-ui/icons/Airplay';
import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import * as Constants from '../../components/DataQuery/Queries'
import mockRokuData from '../../mocks/data/roku-generic';
import { Title } from 'react-admin'; 

// for development purposes - easily switch between mock and real data
const USE_MOCK = false;

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
    },
    chartHeading: {
        padding: '16px',
        color: 'white',
        'background-image': 'linear-gradient(to right, #ec1c24, #d91c5c)'
    }
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
                        <div className={classes.chartHeading}>Device Activity</div>
                        {USE_MOCK ?
                            <PieChart mockData={mockRokuData}/> :
                            <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
                        }
                    </Paper>
                </Grid>
                <Grid item xs>
                    <CardIcon Icon={MovieIcon} bgColor="#db373e" />
                    <Paper className={classes.paper}>
                        <div className={classes.chartHeading}>Movie Viewership</div>
                        {USE_MOCK ?
                            <BarChart mockData={mockRokuData}/> :
                            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeList;
