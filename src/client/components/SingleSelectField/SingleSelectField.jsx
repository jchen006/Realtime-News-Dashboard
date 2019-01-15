import React from 'react'
import PropTypes from 'prop-types'
import * as Components from './SingleSelectComponents'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import Select from 'react-select'
import { selectStyles } from '../../utils/styles';

class SingleSelectField extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(value) {
        this.props.onChange(value)
    }

    render() {
        const { 
            classes, 
            theme, 
            options,
            value,
            placeholder
        } = this.props

        return (
            <Select
                classes={classes}
                styles={selectStyles(theme)}
                options={options}
                components={Components}
                value={value}
                onChange={this.handleOnChange}
                placeholder={placeholder}
                isClearable
            />
        )
    }
    
}

SingleSelectField.propTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(SingleSelectField)