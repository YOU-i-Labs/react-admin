import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';

const styles = {
    title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
};

const CustomAppBar = ({ classes, ...props }) => (
    <AppBar {...props} userMenu={<ProfileMenu />}>
        <Typography
            
            color="inherit"
            className={classes.title}
            id="react-admin-title"
        />
        <span className={classes.spacer} />
    </AppBar>
);

export default withStyles(styles)(CustomAppBar);
