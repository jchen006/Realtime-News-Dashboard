export default (state = {}, action) => {
    let google
    switch(action.type) {
        case 'UPDATE_QUERIES':
            google = Object.assign({}, state, { queries: action.payload.queries })
            return google
        case 'UPDATE_COUNTRIES': 
            google = Object.assign({}, state, { countries: action.payload.queries })
            return google
        case 'UPDATE_LANGUAGE':
            google = Object.assign({}, state, { languages: action.payload.languages })
            return google
        case 'UPDATE_CATEGORIES':
            google = Object.assign({}, state, { categories: action.payload.categories })
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