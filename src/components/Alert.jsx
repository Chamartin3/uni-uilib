import React from 'react';


import Alert from '@material-ui/lab/Alert';
import { Snackbar, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import  { COLORS } from '../uiTheme'


export default React.forwardRef(({ color, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMsj] = React.useState('');
  const [loading, setLoading] = React.useState(null);

  let colorExists = Object.keys(COLORS).find(c => c === color)
  let Color = colorExists ? COLORS[colorExists] : COLORS['accent']

  const classes = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: Color,
      borderRadius: 25
    }
  }
  ))()


  React.useImperativeHandle(ref, () => ({
    open(message, loading = false) {
      setMsj(message)
      setOpen(true)
      setLoading(loading)
    }
  })
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        color={Color}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert
          icon={loading ? <CircularProgress
            style={{'color': 'white'}} 
            size={16} /> : null}
          className={classes.root}
          elevation={6}
          variant="filled"
          onClose={handleClose}
          {...props}
          severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
})