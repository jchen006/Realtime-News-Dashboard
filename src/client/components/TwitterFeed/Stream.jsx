import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetCard from './TweetCard.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import io from 'socket.io-client'
import { connect } from 'react-redux';
import * as _ from 'underscore'

const mapStateToProps = state => {
    const twitter = state.twitterReducer
    return {
        max: twitter.max,
        language: twitter.language,
        throttle: twitter.throttle,
        filters: twitter.filters
    }
}

class Stream extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnecting: true,
            tweets: []
        }
    }

    componentDidMount() {
        var endpoint = 'localhost:8080'
        this.socket = io(endpoint)
        this.socket.on('connect', () => {
            this.setState( { isConnecting: false } )
        })
    
        this.socket.on('tweet', (data) => {
            if(this.state.tweets.length == this.props.max) {
                var newTweetsArray = this.state.tweets.slice()
                newTweetsArray.shift()
                newTweetsArray.push(data)
                this.setState( { tweets: newTweetsArray } )
            } else if(this.state.tweets.length < this.props.max) {
                var newTweetsArray = this.state.tweets.concat(data)
                this.setState( { tweets: newTweetsArray } )
            }
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.language !== this.props.language || _.isEqual(prevProps.filters, this.props.filters)) {
                this.socket.emit('settingsUpdates', {
                    filters:  this.props.filters,
                    language: this.props.language
            })
        }
    }

    renderTweets() {
        return this.state.tweets.slice().reverse().map((tweet) => {
            return (
                <TweetCard
                    key = { tweet.user.name }
                    user = { tweet.user.name }
                    createdAt = { tweet.created_at }
                    text = { tweet.text }
                />
            )
        })
    }

    renderTweetDisplay() {
        return (
            <div>
                { this.renderTweets() }
            </div>
        )
    }

    renderLoading() {
        return (
            <LoadingSpinner/>
        )
    }


    render() {
        return (
            <div>
                { !this.state.isConnecting && this.state.tweets.length > 0 ? 
                    this.renderTweetDisplay() : this.renderLoading() }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stream)