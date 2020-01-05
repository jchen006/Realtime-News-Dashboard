import React from 'react';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import fetchRetry from 'fetch-retry';
import { WeatherTile } from './WeatherTile.jsx';

class Weather extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            info: {}
        }
        this.onGeolocationError = this.onGeolocationError.bind(this);
        this.updateWeatherInfo = this.updateWeatherInfo.bind(this);
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.postWeatherData, this.onGeolocationError, {timeout: 4000});
        } else {
            // figure out coordinates to Saratoga for default
            this.postWeatherData({
                coords: {
                    longitude: -122.025146,
                    latitude:  37.266949,
                }
            })
        }
    }

    updateWeatherInfo(info) {
        this.setState({
            info
        });
    }

    onGeolocationError(error) {
        this.postWeatherData({
            coords: {
                longitude: -122.025146,
                latitude:  37.266949,
            }
        })
    }

    postWeatherData(position) {
        fetchRetry('http://localhost:8080/weather/forecast', {
            method: 'POST',
            body: JSON.stringify({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }),
            retries: 3
        })
        .then(response => response.json())
        .then(this.updateWeatherInfo)
        .catch()
    }

    render() {
        const {info} = this.state;
        return (
            <React.Fragment>
                <WeatherTile {...info}/>
            </React.Fragment>
        )
    }
}

export default Weather;





