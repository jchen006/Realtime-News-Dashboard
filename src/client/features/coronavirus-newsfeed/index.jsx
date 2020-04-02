import React from 'react';
import { TwitterNewsfeed } from './newsfeeds';
import Grid from '@material-ui/core/Grid';
import { NewsfeedPanel } from 'components/NewsfeedPanel';

// Look into adjustable panels later 

function CoronaviursNewsfeed() {
    return (
        <div>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <NewsfeedPanel panelTitle={'Twitter'}>
                    <TwitterNewsfeed/>
                </NewsfeedPanel>
                <NewsfeedPanel/>
                <NewsfeedPanel/> 
            </Grid>
        </div>
    )
}

export { CoronaviursNewsfeed };