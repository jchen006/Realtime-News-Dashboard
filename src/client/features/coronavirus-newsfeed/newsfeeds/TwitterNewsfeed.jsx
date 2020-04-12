import React, { useState, useEffect } from 'react';
import { useSocket } from 'use-socketio';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { TwitterItem } from 'components/ListItems/components/TwitterItem';
import { ListItems } from 'components/ListItems';
import _ from 'underscore';
import { Flipper } from "react-flip-toolkit";


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
                currentTweets.pop();
                setTweets(currentTweets);
            } else {
                setTweets([newTweet, ...tweets]);
            }
        }
    }

    // Wondering if it makes more sense to a debounce but that reduces the number of tweets all together 
    const { socket } = useSocket("tweet", _.throttle(updateTweets, 5000));

    if(tweets.length === 0) {
        return <LoadingSpinner text="Connecting to Twitter Stream"/>
    }

    return (
        <Flipper
            flipKey={`twitter-newsfeed-flip-list`}
            spring={'stiff'}
            staggerConfig={{
                default: {
                    reverse: true,
                    speed: 1
                },
                namedStagger : { speed: .2 }
            }}
            >
            <ListItems items={tweets} ItemComponent={TwitterItem}/>
        </Flipper>

    )
}

export { TwitterNewsfeed };