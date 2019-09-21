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
let queryTopHeadlines = async (qs, callback) => {
    try {
        const requestUrl = url.google.topHeadlines(qs);
        const response = await fetch(requestUrl, options);
        const json = await response.json();
        const {
            articles = []
        } = json;
        const mappedArticles = articles.map(article => googleNewsMapper(article));
        callback(mappedArticles, null);
    } catch(error) {
        callback(null, error);
        throw new Error('')
    }
}

let queryAllSources = (qs, callback) => {
    var options = {
        url: url.google.sources,
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