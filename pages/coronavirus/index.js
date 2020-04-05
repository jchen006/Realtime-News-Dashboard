import React from 'react';
import { CoronavirusConfirmedChart } from '../../src/client/features/coronavirus-confirmed-chart';
import { CoronaviursNewsfeed } from '../../src/client/features/coronavirus-newsfeed';

function CoronavirusDashboard() {
    // Add a search functionality 
    // Add a running list of countries 
    // Add an option to follow 
    // follow will open up to see more deatils 
    // including news and line graphs 
    // Tweets will be right side 
    return (
        <div>
            {/* <CoronavirusConfirmedChart/> */}
            <CoronaviursNewsfeed/>
        </div>
    )
}

export default CoronavirusDashboard;