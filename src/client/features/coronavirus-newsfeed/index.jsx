import React from 'react';
import { TwitterNewsfeed, GoogleNewsfeed } from './newsfeeds';
import Grid from '@material-ui/core/Grid';
import { NewsfeedPanel } from 'components/Newsfeed/components/NewsfeedPanel';

function CoronaviursNewsfeed() {
    return (
        <div>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                spacing={4}
            >
                <NewsfeedPanel panelTitle={'Twitter'}>
                    <TwitterNewsfeed/>
                </NewsfeedPanel>
                <NewsfeedPanel panelTitle={'Google'}>
                    <GoogleNewsfeed/>
                </NewsfeedPanel>
            </Grid>
        </div>
    )
}

export { CoronaviursNewsfeed };
