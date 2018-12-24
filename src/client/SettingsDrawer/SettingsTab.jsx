import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { settingsTab } from './styles.js'

class SettingsTab extends React.Component {
    constructor(props) {
        super(props)
    }

    renderGoogleSettingsPanel() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Google News</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    renderTwitterSettingsPanel() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Twitter</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                {this.renderGoogleSettingsPanel()}
                {this.renderTwitterSettingsPanel()}
            </div>
        )
    }
}

// const { classes } = props;
// return (
//   <div className={classes.root}>
//     <ExpansionPanel>
{/* //       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography className={classes.heading}>Expansion Panel 1</Typography>
//       </ExpansionPanelSummary>
//       <ExpansionPanelDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//           sit amet blandit leo lobortis eget.
//         </Typography>
//       </ExpansionPanelDetails> */}
//     </ExpansionPanel>
//     <ExpansionPanel>
//       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography className={classes.heading}>Expansion Panel 2</Typography>
//       </ExpansionPanelSummary>
//       <ExpansionPanelDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//           sit amet blandit leo lobortis eget.
//         </Typography>
//       </ExpansionPanelDetails>
//     </ExpansionPanel>
//     <ExpansionPanel disabled>
//       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
//       </ExpansionPanelSummary>
//     </ExpansionPanel>
//   </div>

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(settingsTab)(SimpleExpansionPanel);