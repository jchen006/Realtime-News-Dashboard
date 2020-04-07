import { makeStyles } from '@material-ui/core/styles';

export const useNewsfeedPanelStyles = makeStyles((theme) => ({
    root: {
      width: 400,
      padding: 24,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    header: {
        backgroundColor: "#c0deed"
    }
}));