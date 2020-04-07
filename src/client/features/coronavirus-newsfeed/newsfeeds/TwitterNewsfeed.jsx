import React, { useState, useEffect } from 'react';
import { useSocket } from 'use-socketio';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { TwitterItem } from 'components/ListItems/components/TwitterItem';
import { ListItems } from 'components/ListItems';


function TwitterNewsfeed(props) {
    // const { filters } = props;
    const [tweets, setTweets] = useState([]);

    const { socket } = useSocket("tweet", (newTweet) => {
        console.log(newTweet);
        let currentTweets = [...tweets];
        let tweetExists = tweets.find(tweet => tweet.id === newTweet.id);
        if (!tweetExists) {
            if(tweets.length === 10) {
                currentTweets = currentTweets.slice(1);
                currentTweets.unshift(newTweet);
                setTweets(currentTweets);
            } else {
                setTweets([newTweet, ...tweets]);
            }
        }
    })

    // const updateFilters = () => {
    //     socket.emit('settingsUpdates', {
    //         filters
    //     })
    // }

    // useEffect(updateFilters, [filters]);

    if(tweets.length === 0) {
        return <><LoadingSpinner text="Connecting to Twitter Stream"/></>
    }

    return (
        <>
            <ListItems items={tweets} ItemComponent={TwitterItem}/>
        </>
    )
}

export { TwitterNewsfeed };