import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

import compose from 'recompose/compose';
import Typography from '@material-ui/core/Typography';

import { translate, Title, TextField } from 'react-admin'; // eslint-disable-line import/no-unresolved

const styles = {
    media: {
        height: '18em',
    },
    card: {
        boxShadow: 'none',
        borderRadius: 0,
    },
};

const HomeList = ({ props, classes, translate }) => (
    <Grid spacing={16} container style={{ padding: '0 0em' }}>
        <Card style={{ boxShadow: 'none' }}>
            <Title title="Home" />
            <CardContent>
                <TextField source="id" />
                <Typography variant="title" component="h2">
                    Welcome
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Welcome to the Administration Console. That's like Justin
                    Trudeau winning the Grey Cup. I'm personally a big fan of
                    Oscar Peterson eh. They’re the head coach and chief punk on
                    that Flin Flon team. Sign it to Bachman-Turner Overdrive, my
                    good pal. I don't think I should be hanging around with you
                    and Norm MacDonald anymore. Watch your step and remember,
                    Bob and Doug MacKenzie. Take off eh.
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

        <Card style={{ boxShadow: 'none' }}>
            <CardContent>
                <TextField source="id" />
                <Typography variant="title" component="h2">
                    Analytics
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Analytcs are super. By default, Analytics are switched off
                    and need to be switched on to start collecting data. The
                    exception to this rule is with Roku Cloud, where we collect
                    data to support the 'Disconnect on Play' feature. To swith
                    on Analytics, please navigate to the Configuration view and
                    turn 'Analytics' on. You can turn Analytics off and on as
                    needed and you will not lose the data you have already
                    collected.
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

        <Card style={{ boxShadow: 'none' }}>
            <CardContent>
                <TextField source="id" />
                <Typography variant="title" component="h2">
                    Content
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Content is grand. Geez, there's a lot of snow shovel, eh?
                    Saskatchewan castle, Dauphin brewery, Royal Canadian
                    Institute for the Mentally Insane… hey, that’s the loony
                    bin, eh? I'm personally a big fan of Samantha Bee. They’re
                    the head coach and chief punk on that Punkeydoodles Corner
                    team. Take off, Oscar Peterson likes me, eh? Yes. But they
                    aren’t alone. They got two skis with them. I know you like
                    it when people call you Nelly Furtado. In Canada, scarfs
                    only go up in price. Anyone knows that. Even Gordon
                    Lightfoot knows that. Hoser Ipsum eh.
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Grid>
);

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(HomeList);
