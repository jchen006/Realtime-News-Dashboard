import React, { Component } from 'react';
import PropTypes from 'prop-types'

import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer.jsx'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TopBar from './components/TopBar/TopBar.jsx'
import { withStyles } from '@material-ui/core/styles'

import NewsFeed from './components/NewsFeed/NewsFeed.jsx'
import Stream from './components/TwitterFeed/Stream.jsx'
import io from 'socket.io-client'

import keydown from 'react-keydown'

import { connect } from 'react-redux';
import { simpleAction } from './actions/SimpleAction'
import SnackbarNotification from './components/SnackbarNotification/SnackbarNotification.jsx';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = 
    {
      displaySettings: false,
      twitterSnackbar: {
        display: false,
        message: '',
        variant: ''
      }
    }
    this.handleOnDrawerOpen = this.handleOnDrawerOpen.bind(this)
    this.simpleAction = this.simpleAction.bind(this)
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    var endpoint = 'http://localhost:8080';
    this.socket = io(endpoint, { reconnect: true });
    this.socket.on('error', (err) => {
      console.log(err);
    });
  }

  handleOnDrawerOpen() {
    this.setState({
      displaySettings: !this.state.displaySettings
    })
  }

  handleSnackbarOpen(message, variant) {
    this.setState({
      twitterSnackbar: {
        display: true,
        message, 
        variant
      }
    })
  }

  handleSnackbarClose(event, reason) {
    if(reason === 'clickaway') {
      return;
    }
    this.setState({
      twitterSnackbar: {
        display: false,
        message: '',
        variant: ''
      }
    })
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    const { classes } = this.props
    const { displaySettings } = this.state
    return (
      <div className={classes.root}>
        <TopBar onClick={this.handleOnDrawerOpen}/>
        {/* <Button 
          variant="contained" onClick={this.simpleAction}>
          Test
        </Button> */}
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Stream socket={this.socket}/>
          </Grid>
          <Grid item xs={6}>
            {/* <NewsFeed/> */}
          </Grid>
        </Grid>
        <SettingsDrawer 
          displaySettings={displaySettings}
          handleSnackbarOpen={this.handleSnackbarOpen}
          socket={this.socket}
        />
        <SnackbarNotification
          open={this.state.twitterSnackbar.display}
          handleClose={this.handleSnackbarClose}
          message={this.state.twitterSnackbar.message}
          vairant={this.state.twitterSnackbar.variant}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))