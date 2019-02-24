import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { selectStyles } from '../../utils/styles';
import * as Components from './MultiEntryComponents'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';

/**
 * The Multiple Entry Field is without a select option. 
 */
class MultiEntryField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    /**
     * Is only triggered when there is a deletion
     * @param {*} value 
     */
    handleChange(value) {
        this.props.onChange(value)
    }

    /**
     * Is only triggered when something is being entered
     * @param {*} inputValue
     */
    handleInputChange(inputValue) {
        this.setState({
            inputValue
        })
    }

    handleKeyDown(event) {
        const { key } = event
        const { inputValue } = this.state
        if(!inputValue) return
        switch(key) {
            case 'Enter':
                var newOptionObj = this.createOption(inputValue)
                var updatedQueries = [...this.props.values, newOptionObj]  
                this.props.onChange(updatedQueries)
                this.setState({
                    inputValue: ''
                })
                event.preventDefault()
        }
    }

    createOption(label) {
        return {
            label,
            value: label
        }
    }

    render() {
        const { inputValue } = this.state
        const { classes, theme, values, placeholder, label, disabled} = this.props
        return (
            <Select
                components={Components}
                classes={classes}
                styles={selectStyles(theme)}
                textFieldProps={{
                    label,
                    InputLabelProps: {
                        shrink: true
                    }
                }}
                onInputChange={this.handleInputChange}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                isMulti
                value={values}
                inputValue={inputValue}
                isClearable
                placeholder={placeholder}
                menuIsOpen={false}
                isDisabled={disabled}
            />
        )
    }
}

MultiEntryField.propTypes = {
    onChange: PropTypes.func,
    values: PropTypes.array
}

export default withStyles(styles, { withTheme: true })(MultiEntryField)