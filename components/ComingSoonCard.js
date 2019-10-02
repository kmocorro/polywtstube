import React, { Fragment, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../src/Link';
import Chip from '@material-ui/core/Chip';
import Poll from '@material-ui/icons/Poll';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import DeveloperMode from '@material-ui/icons/Error';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
}));

export default function ComingSoonCard(props) {
    const classes = useStyles();
    const handleClickOpen = props.handleClickOpen;

    return (
        <Fragment>
            <Grid item key={'head'} xs={12} sm={12} md={12}>
                <Typography variant="h6" >
                    Coming Soon
                </Typography>
            </Grid>
            <Grid item key={1} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                        Process Recertification  
                    </Typography>
                    <Typography>
                        An Online Process Recertification for Operators and Technicians
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item key={2} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                        Kotse App  
                    </Typography>
                    <Typography>
                        A QR code verification access pass for employee's vehicle
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item key={3} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                        2019 Year-End Party Registration
                    </Typography>
                    <Typography>
                        Register now and get your QR code pass! Available for a Limited Time Only.
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item key={3} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                        PolyWTS - Tube Traceability
                    </Typography>
                    <Typography>
                        Just another app for Fab4 traceability.
                    </Typography>
                </CardContent>
            </Grid>
        </Fragment>
    )
}