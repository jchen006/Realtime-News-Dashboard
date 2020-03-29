import React, { useState, useEffect } from 'react';
import { useSocket } from 'use-socketio';

function TwitterNewsfeed(props) {
    const { filters } = props;
    const [tweets, setTweets] = useState([]);
    
    const { socket, subscribe, unsubscribe } = useSocket("tweet", (newTweet) => {
        console.log(newTweet);
        let currentTweets = [...tweets];
        let tweetExists = updatedTweets.find(tweet => tweet.id === newTweet.id);
        if(!tweetExists) {
            if(tweets.length === 10) {
                currentTweets = currentTweets.slice(1);
                currentTweets.unshift(newTweet);
                setTweets(currentTweets);
            } else {
                setTweets([newTweet, ...tweets]);
            }
        }
    });

    const updateFilters = () => {
      socket.emit('settingsUpdates', {
        filters
      })
    }

    // Might need to update this into a deep equal effect 
    useEffect(updateFilters, [filters]);

    // Change this a flipboard based type of render 
    // Might need to do section with reddit, google, and twitter 
    // 
    if(tweets.length > 0) {
      return (
        <div>
          <ul>
            {tweets.map(tweet => (
              <li key={tweet.id}>{tweet.text}</li>
            ))}
          </ul>
        </div>
      )
    }

    return <div> <p>Actually waiting for the websocket server...</p> </div>;
}

export { TwitterNewsfeed };