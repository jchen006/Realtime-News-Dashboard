import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      margin: 20,
      backgroundColor: theme.palette.background.paper,
      height: '40vw',
      overflow: 'scroll'
    },
    inline: {
      display: 'inline',
    },
}));