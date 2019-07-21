import React from 'react'
import {
    updateFilters,
    updateLanguage,
    updateMaxDisplay,
    updateThrottle
} from '../../../actions/twitterAction'
import { convertArrayToString } from '../../../utils/string';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { connect } from 'react-redux';
import SingleEntryField from '../../SingleEntryField/SingleEntryField.jsx'
import MultiEntryField from '../../MultiEntryField/MultiEntryField.jsx'
import SingleSelectField from '../../SingleSelectField/SingleSelectField.jsx'

const mapStateToProps = state => {
    const twitter = state.twitterReducer
    return {
        filters: twitter.filters ? twitter.filters : [],
        language: twitter.language,
        max: twitter.max,
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
        this.onFiltersChange = this.onFiltersChange.bind(this)
        this.onLanguageChange = this.onLanguageChange.bind(this)
        this.onMaxTweetsDisplayed = this.onMaxTweetsDisplayed.bind(this)
        this.onThrottleChange = this.onThrottleChange.bind(this)
        this.state = {
            languages: []
        }
    }

    componentDidMount() {
        //Update to be based on environment
        fetch('http://localhost:8080/twitter/languages')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    languages: data
                })
            })
    }

    onFiltersChange(filter) {
        if(filter.length) {
            this.props.socket.emit("filter:update", {filter}, (response) => {
                const { ack, message } = response;
                if(ack) {
                    this.props.handleSnackbarOpen(message);
                }
            });
        } else {
            
        }
        this.props.updateFilters(filter);
    }

    onLanguageChange(language) {
        this.props.socket.emit("language:update", language.value, (response) => {

        })
        this.props.updateLanguage(language.value)
    }

    onMaxTweetsDisplayed(value) {
        this.props.updateMaxDisplay(value)
    }

    onThrottleChange(value) {
        this.props.updateThrottle(value)
    }

    renderMaxTweetsField() {
        return (
            <SingleEntryField
                id={'twitter-max-tweets-field'}
                label={'Max Tweets to Display'}
                value={this.props.max}
                onChange={this.onMaxTweetsDisplayed}
            />
        )
    }

    renderLanguageField() {
        let modifiedLanguages = this.state.languages.length > 0 ? this.state.languages.map((l) => {
            return {
                label: l.name,
                value: l.code
            }
        }) : []
        return (
            <SingleSelectField
                options={modifiedLanguages}
                placeholder={'Select languages'}
                onChange={this.onLanguageChange}
                value={this.props.language}
                label={'Languages'}
            />
        )
    }

    renderThrottleField() {
        return (
            <SingleEntryField
                id={'twitter-throttle-field'}
                label={'Throttle'}
                value={this.props.throttle}
                onChange={this.onThrottleChange}
            />
        )
    }

    renderFiltersField() {
        return (
            <MultiEntryField
                onChange={this.onFiltersChange}
                placeholder={'Enter filters'}
                values={this.props.filters}
                label={'Filters'}
            />
        )
    }

    render() {
        const {
            classes: {
                divider
            }
        } = this.props
        return (
            <div>
                { this.renderMaxTweetsField() } 
                <div className={divider}/>
                { this.renderLanguageField() }
                <div className={divider}/>
                { this.renderThrottleField() }
                <div className={divider}/>
                { this.renderFiltersField() }
            </div>
        )
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TwitterForm)) 