const Sentiment = require('sentiment');

class SentimentModel {
    constructor(client) {
        this.sentiment = new Sentiment();
        this.extras = {};

        // Still need to test and verify 
        client.on('sentiment:valueUpdate', (extras) => {
            this.extras = extras;
        });
    }

    analyze(text) {
        return this.sentiment.analyze(text, this.extras);
    }
}

module.exports = SentimentModel;