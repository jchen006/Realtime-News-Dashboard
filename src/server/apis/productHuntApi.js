const request = require('request');
const { productHunt } = require('../../config/tokens');
const url = require('../../config/url');

const getTechPostToday = (callback) => {
    let options = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${productHunt.token}`,
        Host: 'api.producthunt.com',
        url: url.productHunt('posts')
    }
    console.log(options);
    request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            callback(body, null);
        } else {
            callback(null, err);
        }
    })
}

module.exports = {
    getTechPostToday
}