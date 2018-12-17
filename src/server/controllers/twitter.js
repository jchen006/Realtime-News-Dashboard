const socket = require('socket.io');
const Twitter = require('twitter');
const config = require('../config')

module.exports = {
    stream: function(server) {
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

        initiateLiveStream(filter)
    }
}