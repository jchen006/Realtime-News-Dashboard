/**
Using Dark Sky API for now
*/
const { getForecast } = require('../apis/darkSkyApi');

let forecast = (req, res) => {
    const callback = (responseBody, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(responseBody);
        }
    }
    let coordinates = req.body;
    getForecast(callback, coordinates);
}

module.exports = {
    forecast
} 











