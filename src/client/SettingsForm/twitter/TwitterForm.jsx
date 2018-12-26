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

const mapStateToProps = state => {
    const twitter = state.twitterReducer
    return {
        filters:  twitter.filters,
        language:  twitter.language,
        max:  twitter.max,
        throttle: twitter.throttle
    }
}

const mapDispatchToProps = dispatch => ({
    updateFilters: (filters) => dispatch(updateQueries(filters)),
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

    // onChangeFiltersField(e) {
    //     e.preventDefault()
    //     let value = e.target.value
    //     this.props.updateFilters(value)
    // }

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
                // className={classes.textField}
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
                // className={classes.textField}
                value={this.props.language}
                onChange={this.onChangeLanguageField}
                margin="normal"
                variant="outlined"
            />
        )
    }

    // renderFiltersField() {
    //     return (

    //     )
    // }

    render() {
        return (
            <div>
                { this.renderMaxDisplayField() }
                { this.renderThrottleField() }
                {/* { this.renderFiltersField() } */}
                { this.renderLanguageField() }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterForm)