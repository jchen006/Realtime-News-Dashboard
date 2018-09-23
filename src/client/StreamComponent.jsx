import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetsDisplay from './TweetsDisplay.jsx'
import TweetComponent from './TweetComponent.jsx'
import ReactLoading from 'react-loading'
import SettingsModal from './SettingsModal.jsx'
import io from 'socket.io-client'
import { Stream } from 'stream';

class StreamComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: [],
            maxTweets: 5,
            tweets: [],
            isConnecting: true,
            displayModal: false
        }
    }

    componentDidMount() {
        var endpoint = 'localhost:8080'
        this.socket = io(endpoint)

        this.socket.on('connect', () => {
            this.setState( { isConnecting: false } )
        })

        this.socket.on('tweet', (data) => {
            console.log(data)
            if(this.state.tweets.length == this.state.maxTweets) {
                var newTweetsArray = this.state.tweets.slice()
                newTweetsArray.shift()
                newTweetsArray.push(data)
                this.setState( { tweets: newTweetsArray } )
            } else {
                var newTweetsArray = this.state.tweets.slice()
                newTweetsArray.push(data)
                this.setState( { tweets: newTweetsArray } )
            }
        })
    }

    renderSettingsModal() {
        return (
            <SettingsModal />
        )
    }

    renderLoading() {
        return (
            <ReactLoading type={"spin"} color="#000000"/>
        )
    }

    renderTweets() {
        return this.state.tweets.slice().reverse().map((tweet) => {
            return (
                <TweetComponent
                  user = { tweet.user.name }
                  createdAt = { tweet.created_at }
                  text = { tweet.text }
                />
            )
        })
    }

    renderTweetDisplay() {
        return (
            <TweetsDisplay>
                { this.renderTweets() }
            </TweetsDisplay>
        )
    }

    render() {
        return (
            <div>
                { this.renderTweetDisplay() }
            </div>
        )
    }
}

export default StreamComponent