export default (state = {}, action) => {
    let google
    switch(action.type) {
        case 'UPDATE_QUERIES':
            google = Object.assign({}, state, { queries: action.queries })
            return {
                google
            }
        case 'UPDATE_COUNTRIES': 
            google = Object.assign({}, state, { countries: action.queries })
            return {
                google
            }
        case 'UPDATE_LANGUAGE':
            google = Object.assign({}, state, { languages: action.languages })
            return {
                google
            }
        case 'UPDATE_CATEGORY':
            google = Object.assign({}, state, { categories: action.categories })
            return {
                google
            }
        case 'UPDATE_SOURCES':
            google = Object.assign({}, state, { sources: action.sources })
            return {
                google
            }
        case 'UPDATE_POLLING_INTERVAL':
            google = Object.assign({}, state, { polling_interval: action.polling_interval})
            return {
                google
            }
        default:
            return state
    }
}