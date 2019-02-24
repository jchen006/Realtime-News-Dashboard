const initialState = {
    queries: '',
    countries: {label: "United States of America", value: "us"},
    language: '',
    category: '', 
    sources: [],
    //do the math. I only have 1000 requests a day
    polling_interval: 900000
}

export default (state=initialState, action) => {
    let google
    switch(action.type) {
        case 'UPDATE_QUERY':
            google = Object.assign({}, state, { query: action.payload.query })
            return google
        case 'UPDATE_COUNTRY': 
            google = Object.assign({}, state, { country: action.payload.country })
            return google
        case 'UPDATE_LANGUAGE':
            google = Object.assign({}, state, { language: action.payload.language })
            return google
        case 'UPDATE_CATEGORY':
            google = Object.assign({}, state, { category: action.payload.category })
            return google
        case 'UPDATE_SOURCES':
            google = Object.assign({}, state, { sources: action.payload.sources })
            return google
        case 'UPDATE_POLLING_INTERVAL':
            google = Object.assign({}, state, { polling_interval: action.payload.polling_interval})
            return google
        default:
            return state
    }
}