import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetCard from './TweetCard.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'

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
        const { socket } = this.props
        socket.on('connect', () => {
            console.log("Connected")
            this.setState( { isConnecting: false } )
        })
    
        socket.on('tweet', (data) => {
            console.log(data)
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
        const { socket } = this.props
        if(prevProps.language !== this.props.language || _.isEqual(prevProps.filters, this.props.filters)) {
                socket.emit('settingsUpdates', {
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
        //Update to the Material-ui one
        return (
            <LoadingSpinner/>
        )
    }


    render() {
        console.log(this.state.isConnecting)
        console.log(this.state.tweet.length)
        return (
            <div>
                { !this.state.isConnecting && this.state.tweets.length > 0 ? 
                    this.renderTweetDisplay() : this.renderLoading() }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stream)