import React from 'react'
import PropTYpes from 'prop-types'
import ChipList from '../ChipList/ChipList.jsx'
import { TextField } from '@material-ui/core';

class AddChipField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onKeyPress(e) {
        if(e.charCode === 13) {
            let key = this.props.values.length
            let label = this.state.value
            this.props.handleAddNewValue({
                key,
                label
            })
            this.setState({
                value: ''
            })
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <TextField

                />
                <ChipList
                    
                />
            </div>
        )
    }
}