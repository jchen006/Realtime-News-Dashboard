export default (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_QUERIES':
            let google = Object.assign({}, state, { queries: action.queries })
            return {
                google
            }
        case 'UPDATE_COUNTRIES': 
            let google = Object.assign({}, state, { countries: action.queries })
            return {
                google
            }
        case 'UPDATE_LANGUAGE':
            let google = Object.assign({}, state, { languages: action.languages })
            return {
                google
            }
        case 'UPDATE_CATEGORY':
            let google = Object.assign({}, state, { categories: action.categories })
            return {
                google
            }
        case 'UPDATE_SOURCES':
            let google = Object.assign({}, state, { sources: action.sources })
            return {
                google
            }
        case 'UPDATE_POLLING_INTERVAL':
            let google = Object.assign({}, state, { polling_interval: action.polling_interval})
            return {
                google
            }
        default:
            return state
    }
}