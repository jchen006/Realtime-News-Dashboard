import React from 'react'
import PropTypes from 'prop-types'
import * as Components from './MultiSelectComponents'
import Select from 'react-select'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import { selectStyles } from '../../utils/styles'

class MultiSelectField extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(value) {
        this.props.onChange(value)
    }

    render() {
        const { classes, theme, options, label } = this.props

        return (
            <Select
                classes={classes}
                styles={selectStyles(theme)}
                textFieldProps={{
                    label,
                    InputLabelProps: {
                        shrink: true,
                    },
                  }}
                onChange={this.handleOnChange}
                options={options}
                components={Components}
                placeholder={this.props.placeholder}
                isMulti
                defaultValue={this.props.defaultValue}
            />
        )
    }
}

/**
 * options is an array with the shape of 
 * {
 *  label,
 *  value
 * }
 */
MultiSelectField.propTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default withStyles(styles, {withTheme: true})(MultiSelectField)