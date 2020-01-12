const request = require('request');
const { quotes } = require('../../utils/urlGenerator');
const fetch = require('node-fetch');

const getTodaysQuote = async (callback) => {
    const requestUrl = quotes();
    try{
        const response = await fetch(requestUrl);
        const data = await response.json();
        callback(null, data);
    } catch(error) {
        callback(err, null);
        throw new Error('')
    }
}

module.exports = {
    getTodaysQuote
}