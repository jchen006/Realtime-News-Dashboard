/**
Using Dark Sky API for now
*/
const request = require('request');
const { darkSky } = require('../../config/tokens');
const url = require('../../config/url')

let forecast = (req, res) => {
    let coordinates = req.body;
    let requestUrl = url.darkSky.url(darkSky.key, coordinates)
    let options = {
        url: requestUrl,
        qs: {
            exclude: ['minutely', 'hourly', 'daily']
        }
    }
    request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            res.status(200).send(body);
        } else {
            res.status(500).send(err);
        }
    })
}

module.exports = {
    forecast
} 











