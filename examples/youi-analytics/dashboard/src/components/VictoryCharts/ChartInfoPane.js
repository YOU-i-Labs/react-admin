import React from "react"
import { makeStyles } from '@material-ui/core/styles';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(() => ({
    infoPane: {
        height: '200px'
    }
}));

const ChartInfoPane = (props) => {
    const { dataItem } = props;
    const hasDataItem = dataItem && Object.keys(props.dataItem);
    const classes = useStyles();

    return(
        <div className={classes.infoPane}>
            { hasDataItem ?
                <div>
                    {`${dataItem.dimensionTitle || 'x'}: ${dataItem.x || ''}`}
                    <br></br>
                    {`${dataItem.measureTitle || 'y'}: ${dataItem.y || ''}`}
                </div> :
                <div></div>
            }
        </div>
    );
}

export default ChartInfoPane