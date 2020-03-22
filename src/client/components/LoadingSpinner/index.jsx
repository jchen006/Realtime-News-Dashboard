import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';

function LoadingSpinner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

export { LoadingSpinner }