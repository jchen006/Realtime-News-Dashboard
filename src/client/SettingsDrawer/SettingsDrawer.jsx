import React from 'react'
import PropTypes from 'prop-types'
import { settingsStyles } from './styles.js'
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles'
import SettingsTab from './SettingsTab.jsx'
  
class SettingsDrawer extends React.Component {

    constructor(props) {
        super(props)
    }

    renderFormTab() {
        const { classes } = this.props
        return (
            <div className={classes.list}>
                <SettingsTab />
            </div>
        )
    }
    
    render() {
        const { classes, displaySettings } = this.props
        return (
            <div>
                <Drawer 
                    open={ displaySettings }
                    onClose={this.props.onCloseDrawer}>
                   { this.renderFormTab() }
                </Drawer>
            </div>
        )
    }
}

SettingsDrawer.propTypes = {
    displaySettings: PropTypes.bool,
    classes: PropTypes.object.isRequired
}

export default withStyles(settingsStyles)(SettingsDrawer)
