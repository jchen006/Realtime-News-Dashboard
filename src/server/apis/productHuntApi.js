const request = require('request');
const { productHunt } = require('../../config/tokens');
const url = require('../../config/url');
const fetch = require('node-fetch');

const options = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${productHunt.token}`,
        Host: 'api.producthunt.com'
    }
};

const getTechPostToday = async (callback) => {
    const requestUrl = url.productHunt('posts');
    try {
        const response = await fetch(requestUrl, options);
        const json = await response.json();
        callback(null, json);
    } catch(error) {
        callback(err, null);
        throw new Error('')
    } 
   
}

module.exports = {
    getTechPostToday
}