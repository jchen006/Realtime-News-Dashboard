import React from 'react';
import { CoronavirusConfirmedChart } from 'features/coronavirus-confirmed-chart';
import { connect } from 'react-redux';
import {
    updateCurrentPage
} from 'actions/appAction';
import { CoronavirusBreadcrumbs } from 'features/coronavirus-breadcrumbs';
import { CoronavirusWorldMap } from 'features/coronavirus-world-map';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const mapDispatchToProps = dispatch => {
    return {
        updateCurrentPage: (page) => dispatch(updateCurrentPage(page))
    }
}

function CoronavirusDashboard(props) {
    const { updateCurrentPage } = props;
    updateCurrentPage('Main');
    // Add a search functionality 
    // Add a running list of countries 
    // Add an option to follow 
    // follow will open up to see more deatils 
    // including news and line graphs 
    // Tweets will be right side 
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <CoronavirusConfirmedChart/>
                <CoronavirusWorldMap/>
            </Grid>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(CoronavirusDashboard);