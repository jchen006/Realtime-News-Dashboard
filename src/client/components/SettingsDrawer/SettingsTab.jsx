import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { settingsTab } from './styles.js'
import TwitterForm from '../SettingsForm/twitter/TwitterForm.jsx'
import GoogleForm from '../SettingsForm/google/GoogleForm.jsx'
import Typography from '@material-ui/core/Typography';

class SettingsTab extends React.Component {
    constructor(props) {
        super(props)
    }

    renderGoogleSettingsPanel() {
        const { classes } = this.props
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Google News</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <GoogleForm/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    renderTwitterSettingsPanel() {
        const { classes, socket, handleSnackbarOpen } = this.props
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Twitter</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <TwitterForm socket={socket} handleSnackbarOpen={handleSnackbarOpen}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                { this.renderGoogleSettingsPanel()}
                { this.renderTwitterSettingsPanel() }
            </div>
        )
    }
}

SettingsTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(settingsTab)(SettingsTab);