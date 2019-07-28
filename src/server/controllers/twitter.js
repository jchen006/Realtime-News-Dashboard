const socket = require('socket.io')
const Twitter = require('twitter')
const config = require('../../config/tokens')
const twitterClient = new Twitter(config.twitter)
const SentimentModel = require('../models/SentimentModel');
const { twitterMapper } = require('../mappers/twitterMapper');

var _stream = {}
let filter = {
    track: 'NBA'
}
let language = 'en'
let model;

var initiateLiveStream = function(io, filter) {
    twitterClient.stream('statuses/filter', filter, function(stream) {
        _stream = stream
        _stream.on('data', function(event) {
            if(event.lang == language) {
                // Add a Twitter Mapper that does a sentiment analysis on it.
                // console.log('[EVENT]: ', event && event.text);
                if(event) {
                    let mappedEvent = twitterMapper(event, model);
                    // console.log(mappedEvent);
                    io.emit('tweet', mappedEvent)
                }
            }
        });
    
        _stream.on('error', function(error) {
            console.log('[ERROR]: ', error) //convert to chalk 
            io.emit("error:stream", {
                error
            });
        }); 
    });
}

let stream = function(server, client) {
    let io = socket(server);
    io.on('connection', (client) => {
        console.log('[EVENT]: client connected');
        client = client;
        model = new SentimentModel(client);
        client.on('filter:update', (filters, callback) => {
            _stream.destroy();
            callback({
                ack: true,
                message: `Successfully updated the filters to ${filters}`
            })
            filter.track = filters;
            initiateLiveStream(io, filter);
        });

        client.on('language:update', (language, callback) => {
            console.log(`Client update the language to ${language}`);
            _stream.destroy();
            callback({
                ack: true,
                message: `Successfully updated the language to ${language}`
            });
            filter.language = language;
            initiateLiveStream(io, filter);
        });

        client.on('locations:update', (locations) => {
            console.log('Client update the location');
            _stream.destroy();
            filter.locations = locations;
            initiateLiveStream(io, filter);
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