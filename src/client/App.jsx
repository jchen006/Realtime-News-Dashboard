import React, { Component } from 'react';
import Stream from './TwitterFeed/Stream.jsx'
// import GeoStreamComponent from './GeoStreamComponent.jsx'
import SettingsDrawer from './SettingsDrawer/SettingsDrawer.jsx'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import keydown from 'react-keydown'
import TopBar from './TopBar/TopBar.jsx'
import NewsFeed from './NewsFeed/NewsFeed.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = 
    {
      twitter: {
        filters: [
          { key: 0, label: 'Javascript' },
        ],
        lang: 'en',
        maxTweets: 5
      },
      google: {

      },
      displaySettings: false
    }
    this.handleFiltersDelete = this.handleFiltersDelete.bind(this)
    this.handleAddFilters = this.handleAddFilters.bind(this)
    // this.onUpdateMaxTweets = this.onUpdateMaxTweets.bind(this)
    // this.onUpdateFilter = this.onUpdateFilter.bind(this)
    // this.onShowModal = this.onShowModal.bind(this)
    // this.onHideModal = this.onHideModal.bind(this)
  }

  @keydown('shift+up')
  openModal() {
    console.log("works");
    this.setState({
      displaySettings: !this.state.displaySettings
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

  handleAddFilters(data) {
    const tokens = this.state.twitter.filters
    tokens.push(data)
    this.setState({
      twitter: {
        filters: tokens
      }
    })
  }

  onHideModal() {
    this.setState({
      displayModal: false
    })
  }

  onUpdateFilter() {
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

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {/* <TopBar/> */}
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Stream 
              maxTweets={this.state.twitter.maxTweets}
              />
          </Grid>
          <Grid item xs={6}>
            <NewsFeed
              pollInterval={50000}
            />
          </Grid>
        </Grid>
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