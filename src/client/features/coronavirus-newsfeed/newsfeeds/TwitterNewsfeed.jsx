import React, { useState, useEffect } from 'react';
import { useSocket } from 'use-socketio';
import { LoadingSpinner } from 'components/LoadingSpinner';


function TwitterNewsfeed() {

    const [tweets, setTweets] = useState([]);

    const { socket, subscribe, unsubscribe } = useSocket("tweet", (newTweet) => {
        console.log(newTweet);
        let currentTweets = [...tweets];
        let tweetExists = updatedTweets.find(tweet => tweet.id === newTweet.id);
        let(!tweetExists) {
            if(tweets.length === 10) {
                currentTweets = currentTweets.slice(1);
                currentTweets.unshift(newTweet);
                setTweets(currentTweets);
            } else {
                setTweets([newTweet, ...tweets]);
            }
        }
    })

    const updateFilters = () => {
        socket.emit('settingsUpdates', {
            filters
        })
    }

    useEffect(updateFilters, [filters]);

    if(tweets.length === 0) {
        return <><LoadingSpinner text="Connecting to Twitter Stream"/></>
    }

    return (
        <>
        </>
    )
}

export default TwitterNewsfeed;