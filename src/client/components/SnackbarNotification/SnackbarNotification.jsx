import React from 'react';
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles'

class SnackbarNotification extends React.Component {


    render() {
        // const classes = useStyles();
        const {
            open,
            handleClose,
            message
        } = this.props;
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
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                />
            </React.Fragment>

        );
    }

}

export default SnackbarNotification;


