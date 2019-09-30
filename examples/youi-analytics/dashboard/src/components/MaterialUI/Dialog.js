import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
    root: props => ({
        margin: 0,
        padding: theme.spacing(2),
        paddingRight: 50,
        backgroundColor: props.color
    }),
    closeButton: {
        position: 'absolute',
        right: theme.spacing(0.05),
        top: theme.spacing(0.05)
    },
}))

const DialogTitle = props => {
    const classes = useStyles(props)
    const { children, onClose, color } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

const DialogModal = (props) => {
    const { onClose, open, data } = props;

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle color={data.color} onClose={onClose} id="simple-dialog-title">{data.title}</DialogTitle>
            <DialogContent>Count: {data.value}</DialogContent>
        </Dialog>
    );
}

export default DialogModal