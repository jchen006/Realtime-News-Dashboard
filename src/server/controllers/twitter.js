const socket = require('socket.io')
const Twitter = require('twitter')
const config = require('../../config/tokens')
const client = new Twitter(config.twitter)

var _stream = {}
var filter = {track: 'NBA'}
let io

var initiateLiveStream = function(server) {
    io = socket(server)
    client.stream('statuses/filter', filter, function(stream) {
        _stream = stream
        _stream.on('data', function(event) {
            console.log(event && event.text)
            io.emit('tweet', event)
        });
    
        _stream.on('error', function(error) {
            throw error;
        });

        io.on('update', function(data) {
            console.log(data)
            _stream.destroy()
            if(data.filter) {
                filter.track = data.filter
            }
        
            if(data.lang) {
                filter.lang = data.lang
            }
                
            //Triggers a reinitialization
            initiateLiveStream(filter)
        });
    });
}

let stream = function(server) {
    initiateLiveStream(server)
}

getLanguages = function(req, res) {
    client.get('help/languages', (error, languages, response) => {
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