import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetCard from './TweetCard.jsx'
import ReactLoading from 'react-loading'

class Stream extends Component {
    constructor(props) {
        super(props)
    }

    renderTweets() {
        return this.props.tweets.slice().reverse().map((tweet) => {
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
                { this.props.tweets.length > 0 ? this.renderTweetDisplay() : this.renderLoading() }
            </div>
        )
    }
}


export default Stream