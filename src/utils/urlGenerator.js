const { URL } = require('url');

//should rename request Url generator 

module.exports = {
    google: {
        sources: 'https://newsapi.org/v2/sources',
        everything: 'https://newsapi.org/v2/everything',
        // topHeadlines: 'https://newsapi.org/v2/top-headlines'
        topHeadlines: (params) => {
            let url = new URL('https://newsapi.org/v2/top-headlines?');
            Object.keys(params).forEach(key => url += `${key}=${params[key]}`);
            return url;
        }
    },
    crunchbase: (entity, key) => `https://api.crunchbase.com/v3.1/${entity}?user_key=${key}`,
    darkSky: ({latitude, longitude, apiKey, ...params}) => {
        let url = new URL(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?`);
        Object.keys(params).forEach(key => url += `${key}=${JSON.stringify(params[key])}`);
        return url;
    },
    productHunt: (entity) => `https://api.producthunt.com/v1/${entity}`,
    hackerNews: {
        bestStories: `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`,
        story: (number) => `https://hacker-news.firebaseio.com/v0/item/${number}.json?print=pretty`
    }
}