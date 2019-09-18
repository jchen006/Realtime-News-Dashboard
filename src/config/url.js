const { URL } = require('url');
const { darkSky } = require('./tokens');

module.exports = {
    google: {
        sources: 'https://newsapi.org/v2/sources',
        everything: 'https://newsapi.org/v2/everything',
        topHeadlines: 'https://newsapi.org/v2/top-headlines'
    },
    crunchbase: (entity, key) => `https://api.crunchbase.com/v3.1/${entity}?user_key=${key}`,
    darkSky: ({latitude, longitude, ...params}) => {
        console.log(params)
        let url = new URL(`https://api.darksky.net/forecast/${darkSky.key}/${latitude},${longitude}?`);
        Object.keys(params).forEach(key => url += `${key}=${JSON.stringify(params[key])}`);
        console.log(url)
        return url;
    },
    productHunt: (entity) => `https://api.producthunt.com/v1/${entity}`,
    hackerNews: {
        bestStories: `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`,
        story: (number) => `https://hacker-news.firebaseio.com/v0/item/${number}.json?print=pretty`
    }
}