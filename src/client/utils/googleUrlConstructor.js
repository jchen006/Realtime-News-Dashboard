
// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
encodeQueryData = (data) => {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}

export default topHeadlinesUrl  = (country, category, sources, query) => {
    var base = 'https://newsapi.org/v2/top-headlines?'
    let params = {}
    if(country) {
        params['country'] = country
    }

    if(sources) {
        params['sources'] = sources
    }

    if(category) {
        params['category'] = category
    }

    if(query) {
        params['q'] = query
    }

    let paramsQuery = encodeQueryData(params)
    return `${base}${paramsQuery}`
}

