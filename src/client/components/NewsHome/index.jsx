import React from 'react';
import NewsTiles from '../NewsTiles/index.jsx'

class NewsHome extends React.Component {
    constructor(props) {
        super(props);
        this.urls = [
            'http://localhost:8080/google/topHeadlines?sources=bbc-news,the-new-york-times',
            'http://localhost:8080/twitter/popularTweets',
        ];
        this.state = {
            error: ''
        }
    }

    getAllData() {
        Promise.all(this.urls.map(url => 
            fetch(url)
                .then(response => response.json())
        ))
        .then(data => {
            const [google, twitter] = data;
            this.state({
                google,
                twitter
            })
        })
        .catch(error => {
            this.state = {
                error
            }
        });
    }

    parseJSON(response) {
        return response.json();
    }

    componentDidMount() {
        this.getAllData();
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