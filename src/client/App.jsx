import React from 'react';
import { Switch, Route } from 'react-router';
import NewsHome from './components/NewsHome/index.jsx';
import TrackDashboad from './components/TrackDashboard/TrackDashboard.jsx';
import CoronavirusDashboard from 'dashboards/coronavirus-dashboard';

const App = () => {
    return (
        <Switch>
            <Route path={'/'} component={CoronavirusDashboard}/>
            {/* <Route path={'/track'} component={TrackDashboad}/>
            <Route path={'/coronavirusMonitor'} component={CoronavirusMonitor}/> */}
            {/* <Route path={'/coronavirus'} component={CoronavirusMonitor}/> */}
        </Switch>
    );
}

export default App;