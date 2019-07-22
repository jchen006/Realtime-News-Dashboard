import React from 'react';
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { useSnackBarStyles } from './styles'
import SnackBarNotificationContent from './SnackBarNotificationContent.jsx';

class SnackbarNotification extends React.Component {
    render() {
        const {
            open,
            handleClose,
            message,
            variant
        } = this.props;
        console.log('SBN', this.props)
        return (
            <React.Fragment>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <SnackBarNotificationContent
                        variant={variant}
                        message={message}
                        onClose={handleClose}
                    />
                </Snackbar>

            </React.Fragment>

        );
    }

}

export default SnackbarNotification;


