import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';

class SingleEntryField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            isEntering: false
        }
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        let value = e.target.value
        this.setState({
            inputValue: value,
            isEntering: true
        })
        e.preventDefault()
    }

    // onKeyPress(e) {
    //     if(e.charCode === 13) {
    //         this.props.onEnter(this.state.value)
    //         this.state = {
    //             inputValue: '',
    //             isEntering: false
    //         }
    //         e.preventDefault()
    //     }
    }
    render() {
        const { id, label, value} = this.props
        const { inputValue, isEntering } = this.state

        return (
            <TextField
                id={id}
                label={label}
                value={ !inputValue && isEntering ?  inputValue : value}
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                margin="normal"
            />
        )
    }
}

SingleEntryField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onEnter: PropTypes.func
}

export default SingleEntryField