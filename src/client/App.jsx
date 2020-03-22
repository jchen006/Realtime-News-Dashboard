import React from 'react';
import { Switch, Route } from 'react-router';
import NewsHome from './components/NewsHome/index.jsx';
import TrackDashboad from './components/TrackDashboard/TrackDashboard.jsx';

const App = () => {
    return (
        <Switch>
            <Route path={'/'} component={NewsHome}/>
            <Route exact path={'/track'} component={TrackDashboad}/>
        </Switch>
    );
}

export default App;