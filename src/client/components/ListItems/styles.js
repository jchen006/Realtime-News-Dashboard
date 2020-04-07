import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: '32ch',
      margin: 20,
      backgroundColor: theme.palette.background.paper,
      height: '35vw',
      overflow: 'scroll'
    },
    inline: {
      display: 'inline',
    },
}));