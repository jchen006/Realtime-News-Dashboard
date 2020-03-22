import React from 'react';
import { Switch, Route } from 'react-router';
import NewsHome from './components/NewsHome/index.jsx';
import TrackDashboad from './components/TrackDashboard/TrackDashboard.jsx';
import CoronavirusMonitor from 'dashboards/Coronavirus';

const App = () => {
    return (
        <Switch>
            <Route path={'/'} component={NewsHome}/>
            <Route path={'/track'} component={TrackDashboad}/>
            <Route path={'/coronavirusMonitor'} component={CoronavirusMonitor}/>
            {/* <Route path={'/coronavirus'} component={CoronavirusMonitor}/> */}
        </Switch>
    );
}

export default App;