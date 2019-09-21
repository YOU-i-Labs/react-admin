import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'; //TODO: this is export!!!
import { withStyles } from '@material-ui/core/styles';
import {
    List,
    Responsive,
    SimpleList,
    TextField,
    translate,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

const listStyles = theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: theme.typography.body1,
    cardLink: {
        ...theme.typography.body1,
        flexGrow: 1,
    },
});

// Determine what to display based on responsive layout ...
const PostList = props => (
    <List {...props}>
        <Responsive small={<CommentMobileList />} medium={<CommentGrid />} />
    </List>
);

// Responsive display for mobile devices
const CommentMobileList = props => (
    <SimpleList
        primaryText={record => record.title}
        secondaryText={record => record.body}
        tertiaryText={record =>
            new Date(record.created_at).toLocaleDateString()
        }
        {...props}
    />
);

// Responsive display for desktop
const CommentGrid = withStyles(listStyles)(
    translate(({ classes, ids, data, basePath, translate }) => (
        <Grid spacing={16} container style={{ padding: '0 1em' }}>
            {ids.map(id => (
                <Grid item key={id} sm={12} md={6} lg={4}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <TextField record={data[id]} source="body" />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    ))
);

export default PostList;
