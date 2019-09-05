const { getTechPostToday } = require('../apis/productHuntApi');

let productHunt = (req, res) => {
    const callback = (responseBody, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(responseBody);
        }
    }
    getForecast(callback);
}

module.exports = {
    productHunt
}