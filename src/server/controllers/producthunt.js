const { getTechPostToday } = require('../apis/productHuntApi');

let productHunt = (req, res) => {
    getTechPostToday((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    });
}

module.exports = {
    productHunt
}