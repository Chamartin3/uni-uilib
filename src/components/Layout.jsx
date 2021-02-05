import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const UniPaper = props => {
  
const useStyles = makeStyles( theme => {
  console.log(theme.palette.base.obj)
  console.log(theme.palette.base.main)
  console.log(theme.palette.base.obj.darken().toString())
  
  return {
    root: {
      display: 'flex',
      // flexWrap: 'wrap',
    borderRadius: '10%',
    backgroundColor: theme.palette.base.main,
    minHeight:100,
    // minWidth:100,
    width:'100%',
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:15,
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  }
}
});

const classes = useStyles();

  return (
      <Paper elevation={3} className={classes.root}>
        { props.children }
      </Paper>
  );
}

export default UniPaper