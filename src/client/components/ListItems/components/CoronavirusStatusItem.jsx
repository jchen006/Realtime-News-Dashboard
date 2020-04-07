import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';
import moment from 'moment';

function PrimaryText(props) {
    const { Province_State, Country_Region } = props;
    const renderString = Province_State
        ? `${Province_State}, ${Country_Region}`
        : Country_Region;
    return (
        <>
            <Typography>{renderString}</Typography>
        </>
    );
}

PrimaryText.propTypes = {
    Province_State: PropTypes.string,
    Country_Region: PropTypes.string.isRequired,
};

function SecondaryText(props) {
    const classes = useStyles();
    const { Confirmed, Recovered, Deaths, Last_Update } = props;
    return (
        <>
            <div>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Confirmed:&nbsp;
                </Typography>
                {Confirmed}
            </div>
            <div>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Deaths:&nbsp;
                </Typography>
                {Deaths}
            </div>
            <div>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Recovered:&nbsp;
                </Typography>
                {Recovered}
            </div>
            <div>
                <Typography variant="caption" display="block" gutterBottom>
                    {moment(Last_Update).fromNow()}
                </Typography>
            </div>
        </>
    );
}

// "provinceState": "Hubei",
// "countryRegion": "China",
// "lastUpdate": 1584664982000,
// "lat": 30.9756403482891,
// "long": 112.270692167452,
// "confirmed": 67800,
// "recovered": 58381,
// "deaths": 3132,e
// "active": 6287,
// "admin2": null,
// "fips": null,
// "combinedKey": null,
// "iso2": "CN",
// "iso3": "CHN"
function CoronavirusStatusItem(props) {
    const {
        Province_State,
        Country_Region,
        Confirmed,
        Recovered,
        Deaths,
        Last_Update,
    } = props;
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <PrimaryText
                        Province_State={Province_State}
                        Country_Region={Country_Region}
                    />
                }
                secondary={
                    <SecondaryText
                        Confirmed={Confirmed}
                        Recovered={Recovered}
                        Deaths={Deaths}
                        Last_Update={Last_Update}
                    />
                }
            />
        </ListItem>
    );
}

export { CoronavirusStatusItem };
