import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

export const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      height: 400
    },
}))(MuiExpansionPanelDetails);