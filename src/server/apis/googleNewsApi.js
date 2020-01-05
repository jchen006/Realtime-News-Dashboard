const request = require('request');
const tokens = require('../../config/tokens');
const url = require('../../utils/urlGenerator');
const fetch = require('node-fetch');
const { googleNewsMapper } = require('../mappers/googleNewsMapper')
const options = {
    headers: {
        'X-Api-Key': tokens.google.key
    }
}

/** General batch of all the top headlines  */

// Validate all possible query strings that are legal 
// Evaluate if this is the best pattern with async and await patterns 
let queryTopHeadlines = async (qs, callback) => {
    try {
        //Run a query validation
        const requestUrl = url.google.topHeadlines(qs);
        const response = await fetch(requestUrl, options);
        const json = await response.json();
        const {
            articles = [],
            status = '',
            code = '',
            message = ''
        } = json;
        if(status === 'error') {
            callback(null, { message, code } );
        } else if(status === 'ok') {
            const mappedArticles = articles.map(article => googleNewsMapper(article));
            callback(mappedArticles, null);
        }
    } catch(error) {
        callback(null, error);
        throw new Error('')
    }
}

let queryAllSources = async (qs, callback) => {
    try {
        // Query validation
        const requestUrl = url.google.topSources(qs);
        const response = await fetch(requestUrl, options);
        const json = await response.json();
        const {
            articles = [],
            status = '',
            message = ''
        } = json;
        if(status === 'error') {
            callback(null, message);
        } else if(status === 'ok') {
            const mappedArticles = articles.map(article => googleNewsMapper(article))
            callback(mappedArticles, null);
        }
    } catch (error) {
        callback(null, error);
        throw new Error('');
    }
}

/**
* Gets by specific query on subject matter
* @param {*} req 
* @param {*} res 
*/
let queryEverythingBySubject = (qs, callback) => {
   var options = {
       url: url.google.everything,
       headers: {
           'X-Api-Key': tokens.google.key
       },
       qs
   }
   request(options, (err, response, body) => {
       if(err) {
           callback(null, err);
       } else {
           callback(body, null);
       }
   })
}

module.exports = {
    queryTopHeadlines,
    queryAllSources,
    queryEverythingBySubject
}