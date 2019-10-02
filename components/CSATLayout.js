import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DeviceHub from '@material-ui/icons/DeviceHub';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

import Rating from '@material-ui/lab/Rating';
import EveryoneCard from './EveryoneCard';
import ShortcutCard from './ShortcutCard';
import ComingSoonCard from './ComingSoonCard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © '}
        SunPower Fab4 {' '}
      {new Date().getFullYear()}
      {'. Built with ❤️ by '}
        <Tooltip title="Kevin Mocorro" placement="top">
        <Link color="inherit" href="https://kevinmocorro.com">
            kdm
        </Link>
        </Tooltip>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        color: '#333'
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
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
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const cards = [1, 2, 3, 4];

export default function Layout(props) {
    const classes = useStyles();
    //console.log(props.data);
    const user = props.data;
    const bid = props.bid;
    const sid = props.sid;
    const bn = props.bn;
    const question_1 = props.question_1;
    const question_2 = props.question_2;
    const question_3 = props.question_3;
    const recommendation = props.recommendation;
    const handleClickOpen = props.handleClickOpen;

    return (
        <Fragment>
        <CssBaseline />
        <AppBar position="relative" style={{backgroundColor: '#fff', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 1px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)    '}}>
            <Toolbar>
            <DeviceHub className={classes.icon}/>
            <Typography variant="h6" color="textPrimary">
                META
            </Typography>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item>
                    <Typography color="textPrimary" variant="body1">
                        {"Survey ID : " + bid + sid/**user.nickName */}
                    </Typography>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                    CSAT Survey
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph>
                    Please click a star below to rate <b>{bn}</b>. 
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={8}>
                                <Typography variant={"h5"}>
                                    <b>{bn}</b> is knowledgeable about products and services.
                                </Typography>
                                <Rating name="question1" value={question_1.value} onChange={question_1.onChange}  size="large" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={8}>
                                <Typography variant={"h5"}>
                                    The process getting your concern(s) resolved was simple and easy.
                                </Typography>
                                <Rating name="question2" value={question_2.value} onChange={question_2.onChange}  size="large" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={8}>
                                <Typography variant={"h5"}>
                                    Your overall satisfaction with the quality of service being provided by <b>{bn}</b>.
                                </Typography>
                                <Rating name="question3" value={question_3.value} onChange={question_3.onChange}  size="large" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} >
                                <Typography variant={"h6"}>
                                    Recommendation to meet customer satisfaction based on business requirements:
                                </Typography>
                                <TextField name="recommedation" value={recommendation.value} onChange={recommendation.onChange} variant="outlined" fullWidth  />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={8}>
                                <Button variant="outlined" color="primary" onClick={() => handleClickOpen({ bid: bn })} >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            </div>
            {/* End hero unit */}
            { /**
            <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={2}>

            </Grid>
            </Container>
            */ }
        </main>
        {/* Footer 
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            meta
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Manufacturing Engineering Tool App 
            </Typography>
            <Copyright />
            <Typography variant="caption" align="center" color="textSecondary" component="p">
            {/** meta is made possible through the work of other open source software.
            </Typography>
        </footer>
        {/* End footer */}
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};