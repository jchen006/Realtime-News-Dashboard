const request = require('request');
const { darkSky } = require('../../config/tokens');
const url = require('../../config/url');
const { weatherMapper } = require('../mappers/weatherMapper');
const fetch = require('node-fetch');

const getForecast = async (longitude, latitude, callback) => {
    let requestUrl = url.darkSky({
        longitude,
        latitude,
        exclude: ['minutely', 'hourly', 'daily', 'flags']
    })
    try {
        const response = await fetch(requestUrl);
        const json = await response.json();
        const mappedData = weatherMapper(json);
        callback(mappedData, null);
    } catch(error) {
        callback(null, err);
        throw new Error('');
    }
}

module.exports = {
    getForecast
}