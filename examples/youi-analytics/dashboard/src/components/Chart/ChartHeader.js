import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import CardIcon from '../../components/MaterialUI/CardIcon';


/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles((theme) => ({
    chartHeader: {
        display: 'flex',
        'justify-content': 'space-between'
    },
    title: {
        'margin-right': 'auto',
        'align-self': 'center'
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
    }
}));

const ChartHeader = (props) => {
    const { title, iconComponent, lightTheme, filterBar, children } = props;
    const classes = useStyles();
    const themeClass = lightTheme ? classes.lightTheme : classes.youiTheme;

    return(
        <div>
            <div className={`${classes.chartHeader} ${themeClass} ${filterBar ? classes.filterBar : ''}`}>
                <CardIcon Icon={iconComponent} />
                <div className={classes.title}>{title}</div>
                {children}
            </div>            
        </div>
        
    );
}

export default ChartHeader