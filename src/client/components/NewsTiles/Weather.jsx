import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';

export class Weather extends React.Component {
    constructor(props) {
        this.state = {

        }
    }

    componentDidMount() {
        fetch('/')
            .then()

    }

    render() {
        const classes = useStyles();
        return (

        )
    }
}

// <ReactAnimatedWeather
// icon={defaults.icon}
// color={defaults.color}
// size={defaults.size}
// animate={defaults.animate}
// />



