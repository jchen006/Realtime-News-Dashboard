const { darkSky } = require('../../config/tokens');
const url = require('../../utils/urlGenerator');
const { weatherMapper } = require('../mappers/weatherMapper');
const fetch = require('node-fetch');

const getForecast = async (longitude, latitude, callback) => {
    let requestUrl = url.darkSky({
        longitude,
        latitude,
        apiKey: darkSky.key,
        exclude: ['minutely', 'hourly', 'daily', 'flags']
    })
    try {
        console.log(requestUrl);
        const response = await fetch(requestUrl);
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error)
        } else {
            const mappedData = weatherMapper(json);
            callback(mappedData, null);
        }
    } catch(error) {
        callback(null, error);
        throw new Error(error);
    }
}

module.exports = {
    getForecast
}