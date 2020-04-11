import React, { useState, useEffect } from 'react';
import { useSocket } from 'use-socketio';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { TwitterItem } from 'components/ListItems/components/TwitterItem';
import { ListItems } from 'components/ListItems';
import _ from 'underscore';


function TwitterNewsfeed(props) {
    // const { filters } = props;
    const [tweets, setTweets] = useState([]);


    const updateTweets = (newTweet) => {
        console.log(newTweet);
        let currentTweets = [...tweets];
        let tweetExists = tweets.find(tweet => tweet.id === newTweet.id);
        if (!tweetExists) {
            if(tweets.length === 3) {
                currentTweets = currentTweets.slice(1);
                currentTweets.unshift(newTweet);
                setTweets(currentTweets);
            } else {
                setTweets([newTweet, ...tweets]);
            }
        }
    }

    const { socket } = useSocket("tweet", _.throttle(updateTweets, 5000));

    if(tweets.length === 0) {
        return <LoadingSpinner text="Connecting to Twitter Stream"/>
    }

    return (
        <ListItems items={tweets} ItemComponent={TwitterItem}/>
    )
}

export { TwitterNewsfeed };