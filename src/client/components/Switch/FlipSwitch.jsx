import React from 'react'
import Switch from '@material-ui/core/Switch'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel';

class FlipSwitch extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.handleChange(event.target.checked)
    }

    render() {
        const {
            checked,
            value,
            label
        } = this.props
        return (
            <div>
                <FormControlLabel
                   control={<Switch
                        checked={checked}
                        onChange={this.handleChange}
                        value={value}
                        color="primary"
                    />}
                    label={label}
                />
            </div>
        )
    }
}

FlipSwitch.propTypes = {
    handleChange: PropTypes.func,
    checked: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string
}

export default FlipSwitch
