import React from 'react';


import Alert from '@material-ui/lab/Alert';
import { Snackbar, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import  { COLORS } from '../uiTheme'
import UniIcon from './Icon'

import { getIcon } from './utils'
const AlertIcon = ({type, ...props}) => {
  const SuccesIcon = getIcon('DoneOutline')
  const ReportIcon = getIcon('Report')
  const WarningIcon = getIcon('Warning')
  const ErrorIcon = getIcon('Error')

  const iconProps = {
    size:16,
    style: {'color': 'white'},
    ...props
  }

  return (
    <span>
      {type === 'waiting' ?
      <CircularProgress {...iconProps} /> :

      type === 'warning' ? 
      <WarningIcon {...iconProps} /> : 

      type === 'error' ? 
      <ErrorIcon {...iconProps} /> :

      type === 'success' ? 
      <SuccesIcon {...iconProps} /> :

      <UniIcon {...iconProps} />
      }
    </span>
  )
}



export default React.forwardRef(({ color, variant, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMsj] = React.useState('');
  const [loading, setLoading] = React.useState(null);
  const [type, setType] = React.useState('accent');

  let colorExists = Object.keys(COLORS).find(c => c === color)
  
  const classes = makeStyles(theme => {
    
    let Color = type === 'waiting' ?  
        theme.palette.secondary.main : 
        theme.palette[type]?.main || 
        theme.palette.accent.main
    
    return {
      root: {
        width: '100%',
        backgroundColor: Color,
        borderRadius: 25
      },
      snackbar:{
        borderRadius: 25,
        backgroundColor: Color,
      }
    }
  })()


  React.useImperativeHandle(ref, () => ({
    open(message, variant=null, loading = false) {
      if(variant) setType(variant)
      else setType('accent')
      setMsj(message)
      setOpen(true)
      setLoading(loading)
    }
  })
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      // console.log(reason)
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        // color={Color}

        className={classes.snackbar}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert
          // icon={loading ? <CircularProgress
          //   style={{'color': 'white'}} 
          //   size={16} /> : null}
          icon={<AlertIcon type={type} />}
          className={classes.root}
          elevation={6}
          variant="filled"
          onClose={handleClose}
          {...props}
          >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
})