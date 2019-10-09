import React from "react"
import { makeStyles } from '@material-ui/core/styles';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(() => ({
    infoPane: {
        height: '200px'
    }
}));

const ChartInfoPane = (props) => {
    const { data } = props;
    const hasData = data && Object.keys(props.data);
    const classes = useStyles();

    return(
        <div className={classes.infoPane}>
            { hasData ?
                <div>
                    {`${data.dimensionTitle || 'x'}: ${data.x || ''}`}
                    <br></br>
                    {`${data.measureTitle || 'y'}: ${data.y || ''}`}
                </div> :
                <div></div>
            }
        </div>
    );
}

export default ChartInfoPane