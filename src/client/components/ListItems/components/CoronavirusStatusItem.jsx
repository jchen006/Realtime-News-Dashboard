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
    const classes = useStyles();
    const { confirmed, recovered, deaths, lastUpdate} = props;
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
              { confirmed }
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
              { deaths }
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
              { recovered }
            </div>
            <div>
            <Typography variant="caption" display="block" gutterBottom>
                {moment(lastUpdate).fromNow()}
            </Typography>
            </div>
        </>
    )
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
    const { provinceState, countryRegion, confirmed, recovered, deaths, lastUpdate, iso2 } = props;
    const flagString = iso2 ? `https://www.countryflags.io/${iso2.toLowerCase()}/flat/64.png` : '';
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={`${iso2}-flag`} src={flagString} />
            </ListItemAvatar>
            <ListItemText
                primary={<PrimaryText provinceState={provinceState} countryRegion={countryRegion}/>}
                secondary={<SecondaryText confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate}/>}
            />
        </ListItem>
    )
}

export { CoronavirusStatusItem };