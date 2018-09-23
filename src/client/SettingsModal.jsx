import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

class SettingsModal extends Component {

    constructor(props) {
        super(props)
    }

    renderModalTitle() {
        return (
            <Modal.Dialog>
                <Modal.Title>
                    Settings
                </Modal.Title>
            </Modal.Dialog>
        )
    }

    renderModalBody() {
        return (
            <Modal.Body>
                Adjust settings
            </Modal.Body>
        )
    }

    render() {
        return (
            <div className="static-modal">
                { this.renderModalTitle() }
                { this.renderModalBody() }
            </div>
        )
    }
}

export default SettingsModal