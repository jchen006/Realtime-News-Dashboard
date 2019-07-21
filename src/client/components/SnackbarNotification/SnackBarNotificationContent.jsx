import { useSnackBarContentStyles, variantIcon } from './styles'

function SnackBarNotificationContent(props) {
    const classes = useSnackBarContentStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  
    return (
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        {...other}
      />
    );
}

export default SnackBarNotificationContent;