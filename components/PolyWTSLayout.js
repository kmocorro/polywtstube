import React, { Fragment } from 'react';
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

export default function Layout(props) {
    const classes = useStyles();
    //console.log(props.data);
    console.log(props.setID.value, props.tubeID.value);
    const user = props.data;

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
                        {user.nickName}
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
                    WTS - Poly Tube Traceability
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph>
                    Scan Trolley Set ID then Scan Tube ID
                </Typography>
                <div className={classes.heroButtons}>
                <Grid container spacing={2}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <form onSubmit={props.handleSubmit}>
                                <TextField  
                                    required
                                    autoFocus
                                    id="Set_ID"
                                    label="Set ID"
                                    value={props.setID.value}
                                    onChange={props.setID.onChange}
                                    onKeyDown={props.setID.onSetIDKeyDown}
                                    required
                                    fullWidth
                                    margin="normal"
                                    className={classes.textField}
                                    variant="outlined"
                                />
                                <TextField
                                    required    
                                    id="Tube_ID"
                                    label="Tube ID"
                                    value={props.tubeID.value}
                                    onChange={props.tubeID.onChange}
                                    onKeyDown={props.setID.onTubeIDKeyDown}
                                    required
                                    fullWidth
                                    className={classes.textField}
                                    variant="outlined"
                                />
                                <Button type="submit" variant="contained" color="primary" className={classes.submit} >
                                    Submit
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
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
        {/* Footer */}
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            meta
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Manufacturing Engineering Tool App 
            </Typography>
            <Copyright />
            <Typography variant="caption" align="center" color="textSecondary" component="p">
            {/** meta is made possible through the work of other open source software. */}
            </Typography>
        </footer>
        {/* End footer */}
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};