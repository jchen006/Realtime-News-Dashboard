import React from 'react';
import { CoronavirusConfirmedChart } from '../../../src/client/features/coronavirus-confirmed-chart';
import { CoronaviursNewsfeed } from '../../../src/client/features/coronavirus-newsfeed';
import { TopBar } from '../../../src/client/components/TopBar';
import { useRouter } from 'next/router'
import { SocketIOProvider } from "use-socketio";

function CoronavirusDashboard() {
    // Add a search functionality 
    // Add a running list of countries 
    // Add an option to follow 
    // follow will open up to see more deatils 
    // including news and line graphs 
    // Tweets will be right side
    const socketIoOptions = {
        path: '',
        reconnection: true,
        timeout: 2000
    }
    const router = useRouter()
    const realTime = Boolean(router.query.realTime);

    const renderApp = () => {
        return (
            <>
                <TopBar/>
                {/* <CoronavirusConfirmedChart/> */}
                {/* <Tabs/> */}
                {/* <CoronaviursNewsfeed/> */}
            </>
        )
    }

    if(realTime) {
        <SocketIOProvider url="http://localhost:8080" opts={socketIoOptions}>
            { renderApp() }
        </SocketIOProvider>
    }

    return (
        <div>
          { renderApp() }
        </div>
    )
}

export default CoronavirusDashboard;