/**
Using Dark Sky API for now
*/
const { getForecast } = require('../apis/darkSkyApi');

let forecast = (req, res) => {
    let { longitude, latitude } = req.body;
    getForecast(longitude, latitude, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

module.exports = {
    forecast
} 











