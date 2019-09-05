import React from 'react';
import { Switch, Route } from 'react-router';
import NewsHome from './components/NewsHome/index.jsx';
import TrackDashboad from './components/TrackDashboard/TrackDashboard.jsx';

const App = (props) => {
    return (
        <Switch>
            <Route path={'/'} component={NewsHome}/>
            <Route path={'/track'} component={TrackDashboad}/>
        </Switch>
    )
}

export default App;
