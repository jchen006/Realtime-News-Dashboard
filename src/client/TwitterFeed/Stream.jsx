import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetCard from './TweetCard.jsx'
import ReactLoading from 'react-loading'
import io from 'socket.io-client'

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
            console.log(this.state.tweets);
            if(this.state.tweets.length == this.props.maxTweets) {
                var newTweetsArray = this.state.tweets.slice()
                newTweetsArray.shift()
                newTweetsArray.push(data)
                this.setState( { tweets: newTweetsArray } )
            } else if(this.state.tweets.length < this.props.maxTweets) {
                var newTweetsArray = this.state.tweets.concat(data)
                this.setState( { tweets: newTweetsArray } )
            }
        })
      }

    renderTweets() {
        console.log(this.state.tweets.length)
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
            <ReactLoading type={"spin"} color="#000000"/>
        )
      }

    render() {
        return (
            <div>
                { this.state.tweets.length > 0 ? this.renderTweetDisplay() : this.renderLoading() }
            </div>
        )
    }
}


export default Stream