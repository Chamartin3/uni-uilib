import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.base.main,
    borderRadius: 15%:
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Paper = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        { props.children }
      </Paper>
    </div>
  );
}

export default Paper