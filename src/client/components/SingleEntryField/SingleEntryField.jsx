import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';

class SingleEntryField extends React.Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        e.preventDefault()
        this.props.onChange(e)
    }

    onKeyPress(e) {
        e.preventDefault()
        if(e.charCode === 13) {
            this,props.onEnter(e)
        }
    }

    render() {
        return (
            <TextField


            />
        )
    }
}

SingleEntryField.propTypes = {
    value: PropTypes.string
}