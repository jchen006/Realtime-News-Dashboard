module.exports = {
    google: {
        sources: 'https://newsapi.org/v2/sources',
        everything: 'https://newsapi.org/v2/everything',
        topHeadlines: 'https://newsapi.org/v2/top-headlines'
    },
    crunchbase: {
        url: (entity, key) => `https://api.crunchbase.com/v3.1/${entity}?user_key=${key}`
    },
    darkSky: {
        url: (key, {latitude, longitude}, exclude=[]) => `https://api.darksky.net/forecast/${key}/${latitude},${longitude}/${exclude}`
    }
}