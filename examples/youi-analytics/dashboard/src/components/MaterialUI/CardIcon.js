import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

/* TODO: create You.i TV theme with the following */
const styles = {
    card: {
        float: 'left',
        backgroundColor: 'transparent !important',
        boxShadow: 'none',
    },
    icon: {
        float: 'right',
        padding: 14,
        color: '#fff',
    },
};

const CardIcon = ({ Icon, classes, bgColor }) => (
    <Card className={classes.card} style={{ backgroundColor: bgColor }}>
        <Icon className={classes.icon} />
    </Card>
);

export default withStyles(styles)(CardIcon);