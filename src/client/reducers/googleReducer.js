const initialState = {
    queries: [],
    countries: '',
    languages: '',
    category: '', 
    sources: [],
    interval: 5000
}

export default (state=initialState, action) => {
    let google
    switch(action.type) {
        case 'UPDATE_QUERIES':
            google = Object.assign({}, state, { queries: action.payload.queries })
            return google
        case 'UPDATE_COUNTRIES': 
            google = Object.assign({}, state, { countries: action.payload.countries })
            return google
        case 'UPDATE_LANGUAGES':
            google = Object.assign({}, state, { languages: action.payload.languages })
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