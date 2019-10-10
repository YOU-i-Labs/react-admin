import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(() => ({
    datePicker: {
        width: 150,
        float: 'right',
        padding: '0px 8px',
        'justify-content': 'center'
    },
    text: {
        'align-self': 'center'
    }
}));

const DateRangePicker = (props) => {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = React.useState();

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.text}>Date</div>
            <KeyboardDatePicker
                autoOk
                clearable
                variant="dialog"
                inputVariant="standard"
                format="MM/dd/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={date => {
                    console.log(date)
                    handleDateChange(date)
                }}
                className={classes.datePicker}
                />
            <div className={classes.text}>to</div>
            <KeyboardDatePicker
                autoOk
                clearable
                variant="dialog"
                inputVariant="standard"
                format="MM/dd/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={date => {
                    console.log(date)
                    handleDateChange(date)
                }}
                className={classes.datePicker}
                />
        </MuiPickersUtilsProvider>
    );
};

export default DateRangePicker;