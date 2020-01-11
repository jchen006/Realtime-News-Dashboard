const request = require('request');
const { url } = require('../../utils/urlGenerator');
const fetch = require('node-fetch');

const getTodaysQuote = async (callback) => {
    const requestUrl = url.quote();
    try{
        const response = await fetch(requestUrl)
            .then((fetchRes) => {
                return fetchRes.json
            });
        callback(null, response);
    } catch(error) {
        callback(err, null);
        throw new Error('')
    }
}

module.exports = {
    getTodaysQuote
}