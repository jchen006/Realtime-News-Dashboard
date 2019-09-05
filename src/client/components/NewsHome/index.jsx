import React from 'react';
import NewsTiles from '../NewsTiles/index.jsx'

class NewsHome extends React.Component {
    constructor(props) {
        super(props);
        this.urls = [
            'http://localhost:8080/google/topHeadlines?sources=bbc-news,the-new-york-times',
            'http://localhost:8080/twitter/popularTweets',
        ]
    }

    parseJSON(response) {
        return response.json();
    }

    componentDidMount() {
        Promise.all(this.urls.map(url => 
            fetch(url)
                .then(response => response.json())
        ))
        .then(data => {
            console.log(data);
            const [google, twitter] = data;
            this.state({
                google,
                twitter
            })
        })
        .catch(error => {

        });
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