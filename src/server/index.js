const express = require('express');
const config = require('./config')
const http = require('http');
const socket = require('socket.io');
const Twitter = require('twitter');
// const Google = require('googleAPI')

const app = express();

app.use(express.static('../../public'));

const port = 8080;

// app.get('/googleAPI', Google.query);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

const io = socket(server)
var _stream = {}

const client = new Twitter(config.twitter);
var filter = {track: 'Javascript'}

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

io.on('filter_update', function(data) {
    _stream.destroy()
    filter.track = data.filter
    initiateLiveStream(filter)
})

io.on('lang_update', function(data) {
    _stream.destroy()
    filter.lang = data.lang
    initiateLiveStream(filter)
})

initiateLiveStream(filter)

