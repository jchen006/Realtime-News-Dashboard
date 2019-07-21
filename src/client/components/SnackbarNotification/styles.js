import { makeStyles } from '@material-ui/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import { amber, green } from '@material-ui/core/colors';

export const useSnackBarContentStyles = makeStyles((theme) => {
    console.log('theme', theme.palette)
    return ({
        success: {
            backgroundColor: green[600],
          },
          error: {
            backgroundColor: "#d32f2f",
          },
          info: {
            backgroundColor: "#ffa000",
          },
          warning: {
            backgroundColor: amber[700],
          },
          icon: {
            fontSize: 20,
          },
          iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1),
          },
          message: {
            display: 'flex',
            alignItems: 'center',
          },
    });
});

export const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
}