import React from "react"
import { makeStyles } from '@material-ui/core/styles';

/* TODO: create You.i TV theme with the following */
const useStyles = makeStyles(() => ({
    infoPane: {
        height: '50px'
    }
}));

const ChartInfoPane = (props) => {
    const { dataItem, dimensionTitle, measureTitle } = props;
    const hasDataItem = dataItem && Object.keys(props.dataItem);
    const classes = useStyles();

    return(
        <div className={classes.infoPane}>
            { hasDataItem ?
                <div>
                    {`${dataItem.dimensionTitle || dimensionTitle || 'x'}: ${dataItem.x || ''}`}
                    <br></br>
                    {`${dataItem.measureTitle || measureTitle || 'y'}: ${dataItem.y || ''}`}
                </div> :
                <div></div>
            }
        </div>
    );
}

export default ChartInfoPane