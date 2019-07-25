const Sentiment = require('sentiment');

class SentimentModel {
    constructor(client) {
        this.sentiment = new Sentiment();
        client.on('sentiment:valueUpdate', (extras) => {
            this.extras = extras;
        });
        this.extras = {};

    }

    analyze(text) {
        return this.sentiment.analyze(text, this.extras);
    }
}

module.exports = SentimentModel;