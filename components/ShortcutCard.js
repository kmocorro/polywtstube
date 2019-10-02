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
import EightD from '@material-ui/icons/Filter8';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import Memory from '@material-ui/icons/Memory';
import LocationCity from '@material-ui/icons/LocationCity';

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

import gatsby_head from '../images/gatsby1.jpg'
import eforest_head from '../images/eforest1.jpg' 
import bnw_head from '../images/bnw1.jpg'
import cirq_head from '../images/cirq1.jpg'

export default function ShortcutCard(props) {
    const classes = useStyles();
    const handleClickOpen = props.handleClickOpen;

    return (
        <Fragment>
            <Grid item key={'head'} xs={12} sm={12} md={12}>
                <Typography variant="h6">
                    Shortcuts
                </Typography>
            </Grid>
            <Grid item key={1} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                   
                    <Typography gutterBottom variant="h6" component="h2">
                    <a href="http://dev-metaspf401.sunpowercorp.com:7070/ost?tool=all">OST</a> <Chip icon={<Memory color="error"/>} variant="outlined" size="small" label="Engineering" color="textPrimary" className={classes.chip} /> 
                    </Typography>
                    
                    <Typography>
                        Monitoring app for Lot efficiency, Bin NE, Cosmentics and dJv in realtime
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item key={2} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                    <a href="http://dev-metaspf401.sunpowercorp.com:3001/">Spares Monitoring</a> <Chip icon={<EightD />} variant="outlined" size="small" label="8D" color="textPrimary" className={classes.chip} />
                    </Typography>
                    <Typography>
                        Weekly overconsumed spares, on-hand and no forecast items
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item key={3} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    
                    <Typography gutterBottom variant="h6" component="h2">
                    <a href="http://dev-metaspf401.sunpowercorp.com:7070/vf">Visual Factory</a>  <Chip icon={<LocationCity color="error"/>} variant="outlined" size="small" label="Manufacturing" color="textPrimary" className={classes.chip} /> 
                    </Typography>
                    
                    <Typography>
                        An Overview of Fab4's Outs, OEE and WIP
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item key={3} xs={12} sm={12} md={12}>
                <CardContent className={classes.cardContent}>
                    
                    <Typography gutterBottom variant="h6" component="h2">
                    <a href="http://dev-metaspf401.sunpowercorp.com:7070/lot?type=aging">Aging Lots</a>
                       <Chip icon={<LocationCity color="error"/>} variant="outlined" size="small" label="Manufacturing" color="textPrimary" className={classes.chip} /> 
                    </Typography>
                    
                    <Typography>
                        A Monitoring app for Poly to Edgecoat Aging Lots and FIFO
                    </Typography>
                </CardContent>
            </Grid>
        </Fragment>
    )
}