import { makeStyles } from '@material-ui/core/styles';

// Look into keep it centered 
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export { useStyles };