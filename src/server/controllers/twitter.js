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
                // Add a Twitter Mapper that does a sentiment analysis on it.
                console.log(event && event.text)
                io.emit('tweet', event)
            }
        });
    
        _stream.on('error', function(error) {
            // Maybe fire back specific error codes
            console.log(error)
        });
    });
}

let stream = function(server) {
    let io = socket(server)
    io.on('connection', (client) => {
        
        client.on('filter:update', (filters) => {
            console.log(`Client updated the filter ${filters}`);
            _stream.destroy();
            let filterProps = {
                track: filters
            }
            initiateLiveStream(io, filterProps);
        });

        client.on('language:update', (language) => {
            console.log(`Client update the language to ${language}`);
            _stream.destroy();
        });

        client.on('locations:update', (location) => {
            console.log('Client update the location');
            _stream.destroy();
        })

        console.log('Client and server are now connected');
        initiateLiveStream(io, filter);

    });
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