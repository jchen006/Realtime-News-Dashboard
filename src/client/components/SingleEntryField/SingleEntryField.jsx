import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';

class SingleEntryField extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        let value = e.target.value
        this.props.onChange(value)
        e.preventDefault()
    }

    render() {
        const { id, label, value, disabled} = this.props

        return (
            <TextField
                id={id}
                label={label}
                value={ value }
                onChange={this.onChange}
                margin="normal"
                disabled={disabled}
            />
        )
    }
}

SingleEntryField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

export default SingleEntryField