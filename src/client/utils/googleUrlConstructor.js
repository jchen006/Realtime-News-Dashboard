
// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
import google from '../../config/tokens'

const encodeQueryData = (data) => {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}

const topHeadlinesUrl  = (country, category, sources, query, language) => {
    var base = '/google/topHeadlines'
    let params = {}
    if(country) {
        params['country'] = country
    }

    if(sources) {
        let sourcesString = ''
        for(let i = 0; i < sources.length; i++) {
            if(i != sources.length -1) {
                sourcesString += `${sources[i]},`
            }
            sourcesString += `${sources[i]}`
        }
        params['sources'] = sourcesString
    }

    if(category) {
        params['category'] = category
    }

    if(language) {
        params['language'] = language
    }

    if(query) {
        params['q'] = query
    }

    let paramsQuery = encodeQueryData(params)
    return `${base}${paramsQuery}`
}

export default topHeadlinesUrl