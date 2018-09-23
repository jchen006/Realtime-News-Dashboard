const express = require('express');
const Twitter = require('twitter')
const config = require('./config')
const http = require('http')
const TwitterEventModel = require('./twitterEventModel')
const socket = require('socket.io')

const app = express();
app.use(express.static('dist'));

const server = app.listen(8080, () => console.log('Listening on port 8080!'));

const io = socket(server)

const client = new Twitter(config.twitter);
var filter = {track: 'brunch'}
client.stream('statuses/filter', filter, function(stream) {
    stream.on('data', function(event) {
      console.log(event && event.text);
      io.emit('tweet', event)
    });
   
    stream.on('error', function(error) {
      throw error;
    });
});
