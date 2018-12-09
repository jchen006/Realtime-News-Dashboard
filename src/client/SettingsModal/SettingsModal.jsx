import React, { Component } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SettingsForm from './SettingsForm.jsx'
import { withStyles } from '@material-ui/core/styles'
import { modalStyles, formStyles } from './styles.js'

class SettingsModal extends Component {

    constructor(props) {
        super(props)
    }

    rand() {
        return Math.round(Math.random() * 20) - 10;
      }
      
    getModalStyle() {
        const top = 50 + this.rand();
        const left = 50 + this.rand();
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    render() {
        const { classes } = this.props
        const { open } = this.props
        console.log(open)
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
            >
                <div style={this.getModalStyle()} className={classes.paper}>
                    <Typography variant="h4" id="modal-title">
                        Settings
                    </Typography>
                    <SettingsForm 
                        filters={this.props.filters}
                        handleFiltersDelete={this.props.handleFiltersDelete}
                        />
                </div>
          </Modal>
        )
    }
}



SettingsModal.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(modalStyles)(SettingsModal);