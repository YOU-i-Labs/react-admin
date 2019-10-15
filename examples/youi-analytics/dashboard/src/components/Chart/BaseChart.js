import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import ChartHeader from '../../components/Chart/ChartHeader';

import { Grid, Paper, CircularProgress } from '@material-ui/core';

import { QueryBuilder } from "@cubejs-client/react";

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '0px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        'flex-direction': 'column',
    },
    progress: {
        'margin-bottom': 'auto',
        'align-self': 'center'
    }
}));

const BaseChart = (props) => {
    const {
        title,
        isInteractive,
        selectedItem,
        chartId,
        measureTitle,
        dimensionTitle,
        buildQuery,
        Icon,
        Chart,
        mockData,
        handleSelectItem,
        cubejsApi,
        useMock
    } = props;

    const isFiltered = isInteractive && selectedItem && selectedItem.chartId != chartId;

    const classes = useStyles();

    const query = buildQuery(isFiltered ? { value: selectedItem.x, dimension: getDimension(chartId)} : null);
    console.log(query)

    return(
        <Grid item xs>
            <Paper className={`${classes.paper}`}>
                <ChartHeader
                    title={`${title}${ isFiltered ? ` for ${selectedItem.x}` : ''}`}
                    iconComponent={Icon}
                />
                { useMock ?
                    <Chart animate chartId={chartId} mockData={mockData} onSelectItem={handleSelectItem}/> :
                    <QueryBuilder
                        query={query}
                        cubejsApi={cubejsApi}
                        render={({ resultSet, measures, availableMeasures, updateMeasures }) => (
                            (resultSet &&
                            <Chart
                                animate
                                chartId={chartId}
                                resultSet={resultSet}
                                onSelectItem={handleSelectItem}
                                measureTitle={measureTitle}
                                dimensionTitle={dimensionTitle}
                            />) ||
                            <CircularProgress className={classes.progress} color="secondary" />
                        )}
                        />
                }
            </Paper>
        </Grid>
    );
}

const getDimension = (chartId) => {
    if(chartId === "bar-movies") {
        return 'SessionMoviesDevices.model';
    } else if(chartId === "pie-devices") {
        return 'SessionMoviesDevices.title';
    }
}

export default BaseChart