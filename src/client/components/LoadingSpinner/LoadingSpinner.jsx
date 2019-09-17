import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.js'

const LoadingSpinner = (props) => {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

LoadingSpinner.propTypes = {
  //Change to one of 
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingSpinner);