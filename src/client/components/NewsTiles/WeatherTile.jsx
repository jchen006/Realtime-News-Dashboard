import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactAnimatedWeather from 'react-animated-weather';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

export const WeatherTile = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}>
                    {/* <ReactAnimatedWeather/> */}
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


// {
//     "latitude": -71.0589,
//     "longitude": 42.3601,
//     "timezone": "Antarctica/Syowa",
//     "time": 1577817509,
//     "summary": "Mostly Cloudy",
//     "icon": "partly-cloudy-day",
//     "precipIntensity": 0,
//     "precipProbability": 0,
//     "temperature": 1.75,
//     "apparentTemperature": -15.33,
//     "dewPoint": -9.77,
//     "humidity": 0.58,
//     "pressure": 994.9,
//     "windSpeed": 12.1,
//     "windGust": 13.74,
//     "windBearing": 104,
//     "cloudCover": 0.76,
//     "uvIndex": 0,
//     "visibility": 10,
//     "ozone": 312.3
// }