import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Chip, FormControlLabel, Switch } from '@material-ui/core';
import CardIcon from '../../components/MaterialUI/CardIcon';
import DateRangePicker from '../../components/MaterialUI/DateRangePicker';

import FilterListIcon from '@material-ui/icons/FilterListTwoTone';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles((theme) => ({
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
    filterBar: {
        padding: '8px 0px'
    },
    filterGroup: {
        display: 'flex',
    },
    title: {
        'align-self': 'center',
        'margin-right': '16px'
    },
    chip: {
        'align-self': 'center',
        'margin': '0px 8px'
    }
}));

const FilterBar = (props) => {
    const {
        isInteractive,
        handleToggle,
        selectedItemLabel,
        handleDeleteFilterSelection
    } = props;

    const classes = useStyles();

    return (
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
                            {selectedItemLabel  ? <Chip onDelete={handleDeleteFilterSelection} label={selectedItemLabel} className={classes.chip}/> : null}
                        </div>
                        <DateRangePicker />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default FilterBar