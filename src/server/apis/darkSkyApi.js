const request = require('request');
const { darkSky } = require('../../config/tokens');
const url = require('../../config/url');
const { weatherMapper } = require('../mappers/weatherMapper');

const getForecast = (callback, coordinates) => {
    let requestUrl = url.darkSky(darkSky.key, coordinates)
    let options = {
        url: requestUrl,
        qs: {
            exclude: ['minutely', 'hourly', 'daily', 'flags']
        }
    }
    console.log(options);
    request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            const bodyParsed = JSON.parse(body);
            const responseBody = weatherMapper(bodyParsed);
            callback(responseBody, null);
        } else {
            callback(null, err);
        }
    });
}

module.exports = {
    getForecast
}