import React, { Component } from 'react';
import PropTypes from 'prop-types'

import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer.jsx'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TopBar from './components/TopBar/TopBar.jsx'
import { withStyles } from '@material-ui/core/styles'

import NewsFeed from './components/NewsFeed/NewsFeed.jsx'
import Stream from './components/TwitterFeed/Stream.jsx'

import keydown from 'react-keydown'

import { connect } from 'react-redux';
import { simpleAction } from './actions/SimpleAction'

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
      displaySettings: false
    }
    this.handleOnDrawerOpen = this.handleOnDrawerOpen.bind(this)
    this.simpleAction = this.simpleAction.bind(this)
  }

  handleOnDrawerOpen() {
    this.setState({
      displaySettings: !this.state.displaySettings
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
          {/* <Grid item xs={3}>
            <Stream/>
          </Grid> */}
          {/* <Grid item xs={6}>
            <NewsFeed/>
          </Grid> */}
        </Grid>
        <SettingsDrawer displaySettings={displaySettings}/>
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