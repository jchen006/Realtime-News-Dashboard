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
        const { id, label, value} = this.props

        return (
            <TextField
                id={id}
                label={label}
                value={ value }
                onChange={this.onChange}
                margin="normal"
            />
        )
    }
}

SingleEntryField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default SingleEntryField