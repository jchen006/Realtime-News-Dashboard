import React, { Component } from 'react';
import './app.css';
import Stream from './TwitterFeed/Stream.jsx'
// import GeoStreamComponent from './GeoStreamComponent.jsx'
import io from 'socket.io-client'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import keydown from 'react-keydown'
import SettingsModal from './SettingsModal/SettingsModal.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = 
    {
      tweets: [],
      twitter: {
        filters: [
          { key: 0, label: 'Javascript' },
        ],
        lang: 'en',
        maxTweets: 5
      },
      displayModal: false,
      isConnecting: true
    }
    this.handleFiltersDelete = this.handleFiltersDelete.bind(this)
    // this.onUpdateMaxTweets = this.onUpdateMaxTweets.bind(this)
    // this.onUpdateFilter = this.onUpdateFilter.bind(this)
    // this.onUpdateMaxTweets = this.onUpdateMaxTweets.bind(this)
    // this.onShowModal = this.onShowModal.bind(this)
    // this.onHideModal = this.onHideModal.bind(this)
  }

  @keydown('shift+up')
  openModal() {
    console.log("works");
    this.setState({
      displayModal: !this.state.displayModal
    })
  }

  handleFiltersDelete = data => () => {
    this.setState(state => {
        const tokens = [...state.twitter.filters];
        const tokenToDelete = tokens.indexOf(data);
        tokens.splice(tokenToDelete, 1);
        return { 
          twitter: {
            filters: tokens
          } 
        };
    });
  };

  onHideModal() {
    this.setState({
      displayModal: false
    })
  }

  onUpdateFiter() {
    const {
      settings: {
        twitter: {
          filters,
          lang
        }
      }
    } = this.state
    this.socket.emit('update', {
      filters,
      lang
    })
  }

  onUpdateMaxTweets(num) {
    this.setState({
        twitter: {
          maxTweets: num
        }
    })
  }

  componentDidMount() {
    var endpoint = 'localhost:8080'
    this.socket = io(endpoint)

    this.socket.on('connect', () => {
        this.setState( { isConnecting: false } )
    })

    this.socket.on('tweet', (data) => {
        console.log(data);
        if(this.state.tweets.length == this.state.twitter.maxTweets) {
            var newTweetsArray = this.state.tweets.slice()
            newTweetsArray.shift()
            newTweetsArray.push(data)
            this.setState( { tweets: newTweetsArray } )
        } else if(this.state.tweets.length < this.state.twitter.maxTweets) {
            var newTweetsArray = this.state.tweets.slice()
            newTweetsArray.push(data)
            this.setState( { tweets: newTweetsArray } )
        }
    })
  }

  render() {
    const { classes } = this.props
    const { tweets } = this.state

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Stream tweets={tweets}/>
          </Grid>
        </Grid>
        <SettingsModal 
          open={this.state.displayModal} 
          filters={this.state.twitter.filters}
          handleFiltersDelete={this.handleFiltersDelete}
          />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)