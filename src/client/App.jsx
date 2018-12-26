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
import { connect } from 'react-redux';
import { simpleAction } from './actions/SimpleAction'
import Button from '@material-ui/core/Button';

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
    this.handleFiltersDelete = this.handleFiltersDelete.bind(this)
    this.handleAddFilters = this.handleAddFilters.bind(this)
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
        <Button variant="contained" onClick={this.simpleAction}>
          Default
        </Button>
        {/* <Grid container spacing={24}>
          <Grid item xs={3}>
            <Stream/>
          </Grid>
          <Grid item xs={6}>
            <NewsFeed/>
          </Grid>
        </Grid> */}
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