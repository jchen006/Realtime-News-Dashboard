import React from 'react';
import TwitterTile from './TwitterTile.jsx';
import Grid from '@material-ui/core/Grid';
import io from 'socket.io-client';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';
import { connect } from 'react-redux';
import * as _ from 'underscore';

const mapStateToProps = state => {
    const {
        max,
        language,
        throttle,
        filters
    } = state.twitterReducer
    return {
        max,
        language,
        throttle,
        filters
    }
}

export class Twitter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            error: null,
            isConnecting: true
        };
        //Migrate to configs 
        let endpoint = "http://localhost:8080";
        this.socket = io(endpoint, { reconnect: true });
    }

    componentDidMount() {
        this.stockEvents();
    }

    socketEvents() {
        // Should push a notification 
        this.socket.on('error', (error) => {
            this.setState({
                error
            });
        });

        //Should push a notification in the case that there was an error previously
        this.socket.on('connect', () => {
            this.setState( { isConnecting: false });
        });

        this.socket.on('tweet', this.updateTweets);
    }

    updateTweets(data) {
        const { tweets } = this.state;
        const { max } = this.props;
        let updatedTweets = tweets.slice();
        if(tweets.length === max) {
            updatedTweets = updatedTweets.slice(1);
            updatedTweets.push(data);
        } else if(tweets.length < max) {
            updatedTweets = updatedTweets.push(data);
        }
        this.setState({
            tweets: updatedTweets
        });
    }

    componentDidMount() {
       this.socketEvents();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.language !== this.props.language  || _.isEqual(prevProps.filters, this.props.filters)) {
            this.socket.emit('settingsUpdates', {
                filters: this.props.filters,
                language: this.props.language
            })
        }
    }

    render() {
        const { tweets, isConnecting } = this.state;
        return (
            isConnecting || this.state.tweet.length < 10 ?
            <LoadingSpinner/> :
            <Grid container className={'twitter-stream-container'} spacing={2}>
                { tweets.map((tweet) => (
                    <Grid item xs={6} sm={3}>
                        <TwitterTile tweet={tweet}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(Twitter);
