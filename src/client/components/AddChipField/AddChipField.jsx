import React from 'react'
import PropTypes from 'prop-types'
import ChipList from '../ChipList/ChipList.jsx'
import { TextField } from '@material-ui/core';

class AddChipField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: []
        }
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onKeyPress(e) {
        e.preventDefault()
        if(e.charCode === 13) {
            let newValue = {
                key: this.props.values.length,
                label: this.state.value
            }
            this.props.handleAddNewValue(newValue)
            let newList = this.state.list.push(newValue)
            this.setState({
                value: '',
                list: newList
            })
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    onDelete = data => () => {
        this.setState(state => {
            const tokens = [...state.list];
            const tokenToDelete = tokens.indexOf(data);
            tokens.splice(tokenToDelete, 1);
            return { 
              list: tokens
            };
        });
    }

    render() {
        const { 
            classes,
            name 
        } = this.props
        return (
            <div>
                <TextField
                    id={`${name}-add-chip-field`}
                    label={}
                    value={this.state.value}
                    margin={"dense"}
                    variant={"outlined"}
                    onKeyPress={this.onKeyProcess}
                    onChange={this.onChange}
                />
                <ChipList
                    values={this.state.list}
                    onDelete={this.onDelete}
                />
            </div>
        )
    }
}

AddChipField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    handleUpdateList: PropTypes.func
}

export default AddChipField;