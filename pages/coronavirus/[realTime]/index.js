import React from 'react';
import { CoronavirusConfirmedChart } from '../../../src/client/features/coronavirus-confirmed-chart';
import { CoronaviursNewsfeed } from '../../../src/client/features/coronavirus-newsfeed';
import { TopBar } from '../../../src/client/components/TopBar';
import { useRouter } from 'next/router'
import { SocketIOProvider } from "use-socketio";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function CoronavirusDashboard() {
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
                <Container maxWidth='xl' style={{paddingTop: '24px'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <div style={{backgroundColor: 'grey', height: '88vh'}}/>
                            {/* <CoronavirusConfirmedChart/> */}
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{backgroundColor: 'grey', height: '88vh'}}/>
                            {/* <Tabs/> */}
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{backgroundColor: 'grey', height: '88vh'}}/>
                            {/* <CoronaviursNewsfeed/> */}
                        </Grid>
                    </Grid>
                </Container>

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