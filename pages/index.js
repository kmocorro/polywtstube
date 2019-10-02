import React, {Fragment, useState} from 'react'
import Head from 'next/head'
import PolyWTSLayout from '../components/PolyWTSLayout'
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import { withAuthSync, logout } from '../utils/auth'
import getHost from '../utils/get-host'

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';


import { makeStyles, useTheme } from '@material-ui/core/styles';


const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
      backgroundColor: green[600],
  },
  error: {
      backgroundColor: theme.palette.error.dark,
  },
  info: {
      backgroundColor: theme.palette.primary.main,
  },
  warning: {
      backgroundColor: amber[700],
  },
  icon: {
      fontSize: 20,
  },
  iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
  },
  message: {
      display: 'flex',
      alignItems: 'center',
  },
}));


function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
      <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
          <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
          </span>
      }
      action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
          </IconButton>,
      ]}
      {...other}
      />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};


function PolyWTS(props){

  const setID = useForm('');
  const tubeID = useForm('');

  const [ isResponseReserveSuccess, setIsResponseReserveSuccess ] = useState(false);
  const [openSuccessSnackBar, setSuccessOpenSnackBar] = useState(false); // response ng handleOnSubmit
  const [openErrorSnackBar, setErrorOpenSnackBar] = useState(false); // response ng handleOnSubmit
  const [ successMessageSnackBar, setSuccessMessageSnackBar ] = useState('');
  const [ errorMessageSnackBar, setErrorMessageSnackBar ] = useState('');

  function useForm(init){
    const [ value, setValue ] = useState(init);

    function handleOnChange(e){
      setValue(e.target.value);
    }

    function handleSetIDOnKeyDown(e){
      if(e.key === 'Enter'){
        //e.preventDefault();
        //console.log('Should move to next text field...');
      }
    }

    function handleTubeIDOnKeyDown(e){
      if(e.key === 'Enter'){
        //console.log('Submitting...')
        handleSubmit()
      }
    }

    return {
      value,
      onChange: handleOnChange,
      onSetIDKeyDown: handleSetIDOnKeyDown,
      onTubeIDKeyDown: handleTubeIDOnKeyDown
    }

  }

  // SnackBarrrr
  function handleSuccessClose(event, reason) {
      if (reason === 'clickaway') {
      return;
      }

      setSuccessOpenSnackBar(false);
  }

  function handleErrorClose(event, reason) {
      if (reason === 'clickaway') {
      return;
      }

      setErrorOpenSnackBar(false);
  }

  const handleSubmit = () => {

      (async () => {
          const res_submit = await fetch(`http://dev-metaspf401.sunpowercorp.com:8080/api/polywts22`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                setID: setID.value,
                tubeID: tubeID.value,
                username: props.data.username,
              })
          });

          const content = await res_submit.json();
          
          console.log(content);

          if(content.success){

              let loadStatusPage = `/`;
              let asStatusPage = `/`;
              
              setSuccessOpenSnackBar(true);
              setIsResponseReserveSuccess(true);
              setSuccessMessageSnackBar(content.success);
              
              setTimeout(() => {
                Router.reload(loadStatusPage, asStatusPage);
              }, 2000);
              

          } else if(content.error){

            // error snackbar here...
            setErrorOpenSnackBar(true);
            setErrorMessageSnackBar(content.error)

          }

      })();
  }

  return (
      <Fragment>
          <Head>
              <title>PolyWTS to Tube Traceability</title>
          </Head>
          <PolyWTSLayout data={props.data} setID={setID} tubeID={tubeID} handleSubmit={handleSubmit} />
          {
            openSuccessSnackBar ?
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleSuccessClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleSuccessClose}
                    variant="success"
                    message={successMessageSnackBar}
                />
            </Snackbar>
            : <></>
          }
          {
            openErrorSnackBar ? 
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleErrorClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleErrorClose}
                    variant="error"
                    className={classes.margin}
                    message={errorMessageSnackBar}
                />
            </Snackbar>
            : <></>
          }
      </Fragment>
  )
}

PolyWTS.getInitialProps = async ctx => {
    const { token }  = nextCookie(ctx)
    const apiUrl = getHost(ctx.req) + '/api/index'
  
    const redirectOnError = () =>
      typeof window !== 'undefined'
        ? Router.push('/login')
        : ctx.res.writeHead(302, { Location: '/login' }).end()
  
    try {
      const response = await fetch(apiUrl, {
        credentials: 'include',
        headers: {
          Authorization: JSON.stringify({ token })
        }
      });
  
      //console.log(response.statusText);
  
      if (response.statusText === 'OK') {
        const js = await response.json()
        //console.log('js', js)
        return js
      } else {
        // https://github.com/developit/unfetch#caveats
        return await redirectOnError()
      }
    } catch (error) {
      // Implementation or Network error
      return redirectOnError()
    }
  }
  

export default withAuthSync(PolyWTS)