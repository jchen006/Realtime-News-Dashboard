import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './styles.js'
import { Drawer, withStyles } from '@material-ui/core';


class SettingsDrawer extends React.Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        <div>
            <Drawer open={this.props.displaySettings}
                onClose={this.props.onCloseDrawer}>
                <h1> Test </h1>
            </Drawer>
        </div>
    }
}

SettingsDrawer.propTypes = {
    displaySettings: PropTypes.bool
}

export default withStyles(styles)(SettingsDrawer)
