const Sentiment = require('sentiment');

class SentimentModel {
    constructor(client) {
        this.sentiment = new Sentiment();
        this.extras = {};
    }

    analyze(text) {
        return this.sentiment.analyze(text, this.extras);
    }

    update(extras) {
        this.extras = extras;
    }
}

module.exports = SentimentModel;