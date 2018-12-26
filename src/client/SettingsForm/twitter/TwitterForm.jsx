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
        this.onChangeMaxTweetField = this.onChangeMaxTweetField.bind(this)
    }

    onChangeMaxTweetField(e) {
        e.preventDefault()
        this.props.updateMaxDisplay(e.target.value)
    }

    renderMaxTweetsField() {
        return (
            <TextField
                id="outlined-name"
                label="Max"
                // className={classes.textField}
                value={this.props.max}
                onChange={this.onChangeMaxTweetField}
                margin="normal"
                variant="outlined"
            />
        )
    }

    // renderThrottleField() {
    //     return (

    //     )
    // }

    // renderLanguageField() {
    //     return (

    //     )
    // }

    // renderFiltersField() {
    //     return (

    //     )
    // }

    render() {
        return (
            <div>
                { this.renderMaxTweetsField() }
                {/* { this.renderThrottleField() }
                { this.renderFiltersField() }
                { this.renderLanguageField() } */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterForm)