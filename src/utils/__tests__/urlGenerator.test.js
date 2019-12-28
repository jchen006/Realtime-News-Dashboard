const assert = require('assert');
const {
    google,
    crunchbase,
    darkSky,
    productHunt,
    hackerNews
} = require('../urlGenerator');

describe('URL Generator', () => {
    describe('google', () => {
        it('should return the url for sources', () => {
            let params = {
                test: '123'
            }
            let url = google({
                route: 'sources', 
                params
            });
            console.log(url)
            assert.equal(url, 'https://newsapi.org/v2/sources?test=123');
        });
        it('should return the url for everything', () => {
            let params = {
                test: '123'
            }
            let url = google({
                route: 'everything', 
                params
            });
            assert.equal(url, 'https://newsapi.org/v2/everything?test=123');
        });
        it('should return the url for topHeadlines', () => {
            let params = {
                test: '123'
            }
            let url = google({
                route: 'top-headlines', 
                params
            });
            assert.equal(url, 'https://newsapi.org/v2/top-headlines?test=123');
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