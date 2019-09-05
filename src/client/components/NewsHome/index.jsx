import React from 'react';
import NewsTiles from '../NewsTiles/index.jsx'

class NewsHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // try {
        //     let [
        //         googleNews,
        //         tweets,
        //         forecast
        //     ] = await Promise.all([
        //         fetch('/google/topHeadlines?sources=bbc-news,the-new-york-times'),
        //         fetch('/twitter/popularTweets'),
        //         fetch('/weather/forecast')
        //     ]);

        //     this.state = {
                
        //     }
        // } catch(err) {
        //     console.log(err);
        // }
    }

    render() {
        return (
            <>
                <NewsTiles/>
            </>
        );
    }
}

export default NewsHome;



// Have exact squares 
// Have zoom 
// Have transition 
// Highlight with sentiment 
// Transition much slower with changes 