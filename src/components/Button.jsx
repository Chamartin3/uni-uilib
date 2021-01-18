import React from 'react';
import COLORS from '../styles/colors'
import { CircularProgress, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const UniButton = ({ color, loading, ...props }) => {

  let colorExists = Object.keys(COLORS).find(c => c === color)
  let Color = colorExists ? COLORS[colorExists] : COLORS['primary']


  const classes = makeStyles((theme) => ({
    root: {
      backgroundColor: Color,
      color: 'white',
      '&:hover': {
        backgroundColor: COLORS['secondary'],
      }
    },
  }))();

  return (

    <Button
      {...props}
      className={classes.root}>
      { Boolean(loading)
        ? <CircularProgress 
          style={{'color': 'white'}} 
          size={16} />
        : props.children}
    </Button>
  )
}


export default UniButton;