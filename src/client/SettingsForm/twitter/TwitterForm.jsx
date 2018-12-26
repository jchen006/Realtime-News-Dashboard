import React from 'react'
import { ExpansionPanelDetails } from '@material-ui/core';
import {
    updateFilters,
    updateLanguage,
    updateMaxDisplay,
    updateThrottle
} from '../../actions/twitterAction'
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux';
import ChipList from '../../ChipList/ChipList.jsx'

const mapStateToProps = state => {
    const twitter = state.twitterReducer
    return {
        filters:  twitter.filters ? twitter.filters : [],
        language:  twitter.language,
        max:  twitter.max,
        throttle: twitter.throttle
    }
}

const mapDispatchToProps = dispatch => ({
    updateFilters: (filters) => dispatch(updateFilters(filters)),
    updateLanguage: (language) => dispatch(updateLanguage(language)),
    updateMaxDisplay: (max) => dispatch(updateMaxDisplay(max)),
    updateThrottle: (throttle) => dispatch(updateThrottle(throttle))
})


class TwitterForm extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeMaxDisplayField = this.onChangeMaxDisplayField.bind(this)
        this.onChangeThrottleField = this.onChangeThrottleField.bind(this)
        this.onChangeLanguageField = this.onChangeLanguageField.bind(this)
        this.onFilterKeyPress = this.onFilterKeyPress.bind(this)
        this.onDeleteFilter = this.onDeleteFilter.bind(this)
        this.onChangeFiltersField = this.onChangeFiltersField.bind(this)
        this.state = {
            filter: ''
        }
    }

    onChangeMaxDisplayField(e) {
        e.preventDefault()
        let value = e.target.value
        this.props.updateMaxDisplay(value)
    }

    onChangeThrottleField(e) {
        e.preventDefault()
        let value = e.target.value
        this.props.updateThrottle(value)
    }

    onChangeFiltersField(e) {
        console.log("triggered")
        this.setState({
            filter: e.target.value
        })
    }

    onFilterKeyPress(e) {
        if(e.charCode === 13) {
            let value = this.state.filter
            let newValue = {
                key: this.props.filters.length,
                label: value
            }
            let updatedFilters = [...this.props.filters]
            updatedFilters.push(newValue)
            this.props.updateFilters(updatedFilters)
            this.setState({
                filter: ''
            })
        }
    }

    onDeleteFilter = data => () => {
        let updatedFilters = [...this.props.filters]
        const tokenToDelete = updatedFilters.indexOf(data)
        updatedFilters.splice(tokenToDelete, 1)
        this.props.updateFilters(updatedFilters)
    }

    onChangeLanguageField(e) {
        e.preventDefault()
        let value = e.target.value
        this.props.updateLanguage(value)
    }

    renderMaxDisplayField() {
        return (
            <TextField
                id="outlined-name"
                label="Max"
                value={this.props.max}
                onChange={this.onChangeMaxDisplayField}
                margin="normal"
                variant="outlined"
            />
        )
    }

    renderThrottleField() {
        return (
            <TextField
                id="outlined-name"
                label="Throttle"
                // className={classes.textField}
                value={this.props.throttle}
                onChange={this.onChangeThrottleField}
                margin="normal"
                variant="outlined"
            />
        )
    }

    renderLanguageField() {
        return (
            <TextField
                id="outlined-name"
                label="Language"
                value={this.props.language}
                onChange={this.onChangeLanguageField}
                margin="normal"
                variant="outlined"
            />
        )
    }

    renderFiltersField() {
        console.log(this.state.filter)
        return (
            <TextField
                id="outlined-name"
                label="Filters"
                value={this.state.filter}
                onChange={this.onChangeFiltersField}
                onKeyPress={this.onFilterKeyPress}
                margin="normal"
                variant="outlined"
            />
        )
    }

    renderFilterChips() {
        return (
            <ChipList
                values={this.props.filters}
                onDelete={this.onDeleteFilter}
                />
        )
    }

    render() {
        return (
            <div>
                { this.renderMaxDisplayField() }
                { this.renderThrottleField() }
                { this.renderLanguageField() }
                { this.renderFiltersField() }
                { this.renderFilterChips() }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterForm)