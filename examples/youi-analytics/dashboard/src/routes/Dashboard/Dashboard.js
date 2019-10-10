import React from 'react';

import { Title } from 'react-admin'; 

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Chip } from '@material-ui/core';

import PieChart from '../../components/VictoryCharts/PieChart'
import BarChart from '../../components/VictoryCharts/BarChart'

import FilterListIcon from '@material-ui/icons/FilterListTwoTone';
import MovieIcon from '@material-ui/icons/Movie';
import DevicesIcon from '@material-ui/icons/Devices';

import QueryExecutor from '../../components/DataQuery/QueryExecutor';
import * as Constants from '../../components/DataQuery/Queries'

import mockRokuDimensional from '../../mocks/data/roku-dimensional';
import mockMoviesDimensional from '../../mocks/data/movies-dimensional';

import ChartHeader from '../../components/Chart/ChartHeader';
import TopN from '../../components/MaterialUI/TopN'
import CardIcon from '../../components/MaterialUI/CardIcon';
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
    }
}));


const HomeList = () => {
    const classes = useStyles();

    const INITIAL_MOVIE_COUNT = 10;
    const MIN_MOVIE_COUNT = 1;
    const MAX_MOVIE_COUNT = 20;
    const numMovies = mockMoviesDimensional.data.length;

    const [ movieCount, changeMovieCount ] = React.useState(INITIAL_MOVIE_COUNT);
    const [ selectedItem, changeSelectedItem ] = React.useState();

    const handleSelectItem = (item) => {
        changeSelectedItem(item);
    };

    const handleDeleteFilterSelection = () => {
        changeSelectedItem();
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
                                {selectedItem ? <Chip onDelete={handleDeleteFilterSelection} label={selectedItem.x} className={classes.chip}/> : null}
                            </div>
                            <DateRangePicker />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <ChartHeader
                            title={`Device Activity${ selectedItem && selectedItem.chartId != "pie-devices"? ` for ${selectedItem.x}` : ''}`}
                            iconComponent={DevicesIcon}
                        />
                        { USE_MOCK ?
                            <PieChart animate chartId={"pie-devices"} mockData={mockRokuDimensional} onSelectItem={handleSelectItem}/> :
                            <QueryExecutor queryString={Constants.queryDevice} chartType={PieChart} />
                        }
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <ChartHeader
                            title={`Top Movies${ selectedItem && selectedItem.chartId != "bar-movies"? ` for ${selectedItem.x}` : ''}`}
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
                            <BarChart animate chartId={"bar-movies"} mockData={mockMoviesDimensional} topN={movieCount} onSelectItem={handleSelectItem}/> :
                            <QueryExecutor queryString={Constants.queryMovie} chartType={BarChart} />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeList;
