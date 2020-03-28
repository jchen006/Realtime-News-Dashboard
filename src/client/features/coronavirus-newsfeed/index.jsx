import React, { useState } from 'react';
import { useSocket } from 'use-socketio';

function CoronavirusNewsfeed() {
    const [tweets, setTweets] = useState([]);
    
    const { socket, subscribe, unsubscribe } = useSocket("tweet", (newTweet) => {
        console.log(newTweet);
        setTweets([newTweet, ...tweets]);
    });

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

export { CoronavirusNewsfeed };