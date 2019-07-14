/**
Using Dark Sky API for now
*/
const request = require('request');
const { darkSky } = require('../../config/tokens');
const url = require('../../config/url')
const weatherMapper = require('../mappers/weatherMapper');

let forecast = (req, res) => {
    let coordinates = req.body;
    let requestUrl = url.darkSky.url(darkSky.key, coordinates)
    let options = {
        url: requestUrl,
        qs: {
            exclude: ['minutely', 'hourly', 'daily', 'flags']
        }
    }
    request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            console.log(JSON.parse(body));
            console.log(JSON.parse(body).timezone)
            const responseBody = weatherMapper(JSON.parse(body));
            res.status(200).send(responseBody);
        } else {
            res.status(500).send(err);
        }
    });
}

module.exports = {
    forecast
} 











