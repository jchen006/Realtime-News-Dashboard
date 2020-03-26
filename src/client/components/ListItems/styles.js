import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      height: '600px',
      overflow: 'scroll'
    },
    inline: {
      display: 'inline',
    },
}));