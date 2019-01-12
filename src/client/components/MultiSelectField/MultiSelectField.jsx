import React from 'react'
import PropTypes from 'prop-types'
import * as Components from './MultiSelectComponents'
import Select from 'react-select'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class MultiSelectField extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnCategories = this.handleOnCategories.bind(this)
    }

    handleOnCategories(value) {
        this.props.onChange(value)
    }

    render() {
        const { classes, theme, options } = this.props
        const selectStyles = {
            input: (base) => {
                return {
                    ...base,
                    color: theme.palette.text.primary,
                    '& input': {
                        font: 'inherit'
                    }
                }
            }
        }

        return (
            <Select
                classes={classes}
                styles={selectStyles}
                textFieldProps={{
                    label: true,
                    InputLabelProps: {
                        shrink: true
                    }
                }}
                onChange={this.handleOnCategories}
                options={options}
                components={Components}
                placeholder={this.props.placeholder}
                isMulti
                defaultValue={this.props.defaultValue}
            />
        )

        // const selectStyles = {
        //     input: base => ({
        //       ...base,
        //       color: theme.palette.text.primary,
        //       '& input': {
        //         font: 'inherit',
        //       },
        //     }),
        // };

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