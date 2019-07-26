import { useSnackBarContentStyles, variantIcon } from './styles'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import React from 'react';
import clsx from 'clsx';

function SnackBarNotificationContent(props) {
    const classes = useSnackBarContentStyles();
    console.log(props)
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  
    return (
      message ? <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        {...other}
      /> : null
    );
}

export default SnackBarNotificationContent;