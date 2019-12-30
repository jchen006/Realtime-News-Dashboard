import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Weather from '../NewsTiles/Weather.jsx';
import Twitter from '../NewsTiles/Twitter.jsx';
import { useStyles } from './styles';

const NewsHome = (props) => {
    const classes = useStyles();
    return (
        <div classes={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    {/* <Weather/> */}
                </Grid>
                <Grid item xs={6} sm={9}>
                    <Twitter/>
                </Grid>
            </Grid>
        </div>
    );
}

export default NewsHome;



// Have exact squares 
// Have zoom 
// Have transition 
// Highlight with sentiment 
// Transition much slower with changes 