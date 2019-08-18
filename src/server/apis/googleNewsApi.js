const request = require('request')
const tokens = require('../../config/tokens')
const url = require('../../config/url')


/** General batch of all the top headlines  */
let queryTopHeadlines = (qs, callback) => {
    var options = {
        url: url.google.topHeadlines,
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
    });
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