import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TextField } from '@material-ui/core';

import FilterListIcon from '@material-ui/icons/FilterListTwoTone';
import CardIcon from '../../components/MaterialUI/CardIcon';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(() => ({
    topN: {
        width: '35px',
        'padding-right': '8px'
    }
}));

const TopN = (props) => {
    const { lightTheme, defaultValue, min, max, onSelectTopN} = props;

    const [values, setValues] = React.useState({
        n: defaultValue,
    });

    const handleChange = name => event => {
        if(!event.target.value || event.target.value >= min && event.target.value <= max) {
            setValues({ ...values, [name]: event.target.value });
            onSelectTopN(event.target.value)
        }
    };

    // don't allow null values when finished editing
    const handleBlur = () => {
        if(!values.n) {
            setValues({n: defaultValue});
            onSelectTopN(defaultValue)
        }
    }

    const classes = useStyles();

    return (
        <div>
            <CardIcon Icon={FilterListIcon} />
            <TextField
                inputProps={{ min: "1", max: "20", step: "1" }}
                value={values.n}
                onChange={handleChange("n")}
                type="number"
                className={`${classes.topN} ${lightTheme ? 'lightTheme' : ''}`}
                margin="normal"
                onBlur={handleBlur}
            />
        </div>
    );
}

export default TopN;