import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

function PrimaryText(props) {
    const { provinceState, countryRegion } = props;
    const renderString = provinceState ? `${provinceState}, ${countryRegion}`: countryRegion;
    return (
        <>
            <Typography>
                { renderString }
            </Typography>
        </>
    )
}

PrimaryText.propTypes = {
    provinceState: PropTypes.string,
    countryRegion: PropTypes.string.isRequired,
}

function SecondaryText(props) {
    const { confirmed, recovered, deaths} = props;
    return (
        <>
            <Typography>

            </Typography>
        </>
    )
}


function Item(props) {
    const { province, countryRegion, confirmed, recovered, deaths } = props;
    return (
        <ListItem alignItems="flex-start">
            {/* <ListItemAvatar>
                <Avatar alt="" component={}/>
            </ListItemAvatar> */}
            <ListItemText
                primary={<PrimaryText />}
                secondary={<SecondaryText/>}
            />
        </ListItem>
    )
}

export { Item };