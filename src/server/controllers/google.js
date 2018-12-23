const request = require('request')
const tokens = require('../../config/tokens')
const url = require('../../config/url')

/** General batch of all the top headlines  */
let queryTopHeadlines = (req, res) => {
    let qs = req.query
    console.log(qs)
    var options = {
        url: url.google.topHeadlines,
        headers: {
            'X-Api-Key': tokens.google.key
        },
        qs
    }
    request(options, (err, response, body) => {
        if(!err && response.statusCode === 200) {
            res.status(200).send(body)
        } else {
            res.status(500).send(err)
        }
    });
}

/**
 * Gets specifically by all the sources that exists. Used only for filtering and search.
 * @param {*} req 
 * @param {*} res 
 */
let getAllSources = (req, res) => {
    let qs = req.query
    var options = {
        url: url.google.sources,
        headers: {
            'X-Api-Key': tokens.google.key
        },
        qs
    }
    request(options, (err, response, body) => {
        if(!err && response.statusCode === 200) {
            res.status(200).send(body)
        } else {
            res.status(500).send(err)
        }
    })
}

/**
 * Gets by specific query on subject matter
 * @param {*} req 
 * @param {*} res 
 */
let queryEverything = (req, res) => {
    let qs = req.query
    var options = {
        url: url.google.everything,
        headers: {
            'X-Api-Key': tokens.google.key
        },
        qs
    }
    request(options, (err, response, body) => {
        if(!err && response.statusCode === 200) {
            res.status(200).send(body)
        } else {
            res.status(500).send(err)
        }
    })
}

module.exports.queryTopHeadlines = queryTopHeadlines
module.exports.getAllSources = getAllSources
module.exports.queryEverything = queryEverything