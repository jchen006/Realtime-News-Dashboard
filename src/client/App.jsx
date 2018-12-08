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
    this.state = {
      tweets: [],
      maxTweets: 5,
      filters: [],
      displayModal: false,
      isConnecting: true
    }
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

  onHideModal() {
    this.setState({
      displayModal: false
    })
  }


  onUpdateFiter(filters) {
    this.socket.emit('filter_update', {
      filters
    })
  }

  onUpdateLanguage(lang) {
    this.socket.emit('lang_update', {
      lang
    })
  }

  onUpdateMaxTweets(num) {
    this.setState({
        maxTweets: num
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
        if(this.state.tweets.length == this.state.maxTweets) {
            var newTweetsArray = this.state.tweets.slice()
            newTweetsArray.shift()
            newTweetsArray.push(data)
            this.setState( { tweets: newTweetsArray } )
        } else if(this.state.tweets.length < this.state.maxTweets) {
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
        <SettingsModal open={this.state.displayModal}/>
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