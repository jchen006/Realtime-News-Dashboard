const express = require('express');
const config = require('./config')
const http = require('http');
const socket = require('socket.io');
const Twitter = require('twitter');
const healthCheck = require('./controllers/healthCheck')
const google = require('./controllers/google')

const app = express();

app.use(express.static('../../public'));

const port = 8080;

app.get('/healthCheck', healthCheck.healthCheck)
app.get('/google/sources', google.getAllSources)

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

const io = socket(server)
var _stream = {}

const client = new Twitter(config.twitter);
var filter = {track: 'NBA'}

var initiateLiveStream = function(filter) {
    client.stream('statuses/filter', filter, function(stream) {
        _stream = stream
        _stream.on('data', function(event) {
          console.log(event && event.text);
          io.emit('tweet', event)
        });
       
        _stream.on('error', function(error) {
          throw error;
        });
    });
}

io.on('update', function(data) {
    _stream.destroy()
    if(data.filter) {
        filter.track = data.filter
    }

    if(data.lang) {
        filter.lang = data.lang
    }
    
    initiateLiveStream(filter)
});

// initiateLiveStream(filter)

