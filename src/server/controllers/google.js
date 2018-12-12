const request = require('request')
const config = require('../config')

// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
// let queryTopHeadlines = (req, res) => {
//     var options = {
//         url: config.google.url,
//         headers: {
//             'X-Api-Key': config.google.key
//         },
//         qs: {

//         }
//     }
//     request(options, (error, response, body) => {

//     });
// }

let getAllSources = (req, res) => {
    let qs = req.query
    var options = {
        url: config.google.sources,
        headers: {
            'X-Api-Key': config.google.key
        },
        qs
    }
    request(options, (err, response, body) => {
        if(!err) {
            res.status(200).send(body)
        } else {
            res.status(500).send(err)
        }
    })
}

let queryEverything = (req, res) => {

}

// module.exports.queryTopHeadlines = queryTopHeadlines
module.exports.getAllSources = getAllSources
module.exports.queryEverything = queryEverything