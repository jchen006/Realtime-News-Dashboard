const encodeQueryData = (data) => {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}

const topHeadlinesUrl  = (country, category, sources, query, language) => {
    var base = '/google/topHeadlines?'
    let params = {}
    if(country || category) {
        if(country) {
            params['country'] = country.value
        }

        if(category) {
            params['category'] = category.value
        }

    } else if(sources && sources.length > 0) {
        let sourcesString = ''
        for(let i = 0; i < sources.length; i++) {
            const source = sources[i].value
            sourcesString += `${source}`
            if(i != sources.length -1) {
                sourcesString += ','
            }
        }
        params['sources'] = sourcesString
    }

    if(language) {
        params['language'] = language.value
    }

    if(query) {
        params['q'] = query
    }

    let paramsQuery = encodeQueryData(params)
    return `${base}${paramsQuery}`
}

export { topHeadlinesUrl }