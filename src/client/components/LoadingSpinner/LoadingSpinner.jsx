import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.js'

//TODO: deprecate to a functional component with hooks.
const LoadingSpinner = (props) => {
  const {
    classes: {
      progress
    }
  } = props;
  return (
    <React.Fragment>
      <CircularProgress className={progress} />
    </React.Fragment>
  );
}

LoadingSpinner.propTypes = {
  // Change to one of types for now just to ensure consistency 
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingSpinner);