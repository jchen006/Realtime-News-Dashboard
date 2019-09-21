const assert = require('assert');
const {
    google,
    crunchbase,
    darkSky,
    productHunt,
    hackerNews
} = require('../urlGenerator');

describe('URL Generator', () => {
    describe.skip('google', () => {
        it('should return the url for sources', () => {
            let url = google.sources;
            assert.equal(url, 'https://newsapi.org/v2/sources');
        });
        it('should return the url for everything', () => {
            let url = google.everything;
            assert.equal(url, 'https://newsapi.org/v2/everything');
        });
        it('should return the url for topHeadlines', () => {
            let url = google.topHeadlines;
            assert.equal(url, 'https://newsapi.org/v2/top-headlines');
        });
    });

    describe('Crunchbase', () => {
        it('should return the url', () => {
            let requestUrl = crunchbase('test', 'abcd123');
            assert.equal(requestUrl, 'https://api.crunchbase.com/v3.1/test?user_key=abcd123');
        });
    });

    describe('Dark Sky', () => {
        it('should return the correct url', () => {
            let requestUrl = darkSky({
                apiKey: 'abcd1234',
                latitude: '85.01',
                longitude: '14.2',
                exclude: ['monthly']
            });
            let expected = 'https://api.darksky.net/forecast/abcd1234/85.01,14.2?exclude=["monthly"]';
            assert.equal(requestUrl, expected);
        });
    });

    describe('Product Hunt', () => {
        it('should return the correct url', () => {
            let requestUrl = productHunt('test')
            assert.equal(requestUrl, `https://api.producthunt.com/v1/test`);
        });
    });
    
    describe('Hacker News', () => {
        it('should return the url for best stories', () => {
            let requestUrl = hackerNews.bestStories;
            assert.equal(requestUrl, 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
        });
        it('should reutrn the url for stories by id', () => {
            let requestUrl = hackerNews.story('123')
            assert.equal(requestUrl, `https://hacker-news.firebaseio.com/v0/item/123.json?print=pretty`);
        });
    });
})