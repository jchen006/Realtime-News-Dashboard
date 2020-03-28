import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function LoadingSpinner(props) {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <CircularProgress />
        {
          text ?
          <Typography variant="subtitle1" gutterBottom noWrap={false} color={'primary'} className={classes.text}>
            { text }
          </Typography> : null
        }
      </Grid>
    </div>
  )
}

export { LoadingSpinner }