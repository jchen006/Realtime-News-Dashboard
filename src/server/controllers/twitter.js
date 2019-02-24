const socket = require('socket.io')
const Twitter = require('twitter')
const config = require('../../config/tokens')
const twitterClient = new Twitter(config.twitter)

var _stream = {}
let filter = {
    track: 'NBA'
}
let language = 'en'

var initiateLiveStream = function(io, filter) {
    twitterClient.stream('statuses/filter', filter, function(stream) {
        _stream = stream
        _stream.on('data', function(event) {
            if(event.lang == language) {
                console.log(event && event.text)
                io.emit('tweet', event)
            }
        });
    
        _stream.on('error', function(error) {
            console.log(error)
        });
    });
}

let stream = function(server) {
    let io = socket(server)
    io.on('connection', (client) => {
        initiateLiveStream(io, filter)
        client.on('updateSettings', (data) => {
            _stream.destroy()
            if(data.filter) {
                filter.track = data.filter
            }
        
            if(data.lang) {
                langauge = data.lang
            }
                
            console.log("Updated filter: ", filter)
            initiateLiveStream(io, filter)
        })
    })
}

getLanguages = function(req, res) {
    twitterClient.get('help/languages', (error, languages, response) => {
        if(error) {
            throw error
        } else {
            res.status(200).send(languages)
        }

    })
}

module.exports = {
    stream,
    getLanguages
}