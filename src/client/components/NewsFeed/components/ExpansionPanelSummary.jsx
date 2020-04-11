import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

export const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: '#7bafd4',
      color: 'white',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
})(MuiExpansionPanelSummary);
  