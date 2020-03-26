const { URL } = require('url');

//should rename request Url generator 

// Need params check for each of the Google News API 
// 

const googleUrlGenerator = ({ route, params }) => {
    let url = `https://newsapi.org/v2/${route}?`
    Object.keys(params).forEach(key => url += `${key}=${params[key]}`);
    return url;
}

module.exports = {
    google: googleUrlGenerator,
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
    },
    coronavirusMonitor: {
        countries: 'https://covid19.mathdro.id/api/countries',
        dailySummary: 'https://covid19.mathdro.id/api/daily',
        country: country => `https://covid19.mathdro.id/api/countries/${country}`,
        date: date => `https://covid19.mathdro.id/api/daily/${date}`,
        confirmed: 'https://covid19.mathdro.id/api/confirmed',
        deaths: 'https://covid19.mathdro.id/api/deaths'
    }
}