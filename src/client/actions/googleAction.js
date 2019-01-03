/**
 * UPDATE_QUERIES
 * UPDATE_COUNTRIES
 * UPDATE_LANGUAGES
 * UPDATE_CATEGORY
 * UPDATE_SOURCES
 * UPDATE_POLLING_INTERVAL
 * UPDATE_TIME_RANGE
 */
export const UPDATE_QUERIES = 'UPDATE_QUERIES'
export const updateQueries = (queries) => dispatch => {
    dispatch({
        type: UPDATE_QUERIES,
        payload: {
            queries
        }
    })
}

export const UPDATE_COUNTRIES = "UPDATE_COUNTRIES"
export const updateCountries = (countries) => dispatch => {
    dispatch({
        type: UPDATE_COUNTRIES,
        payload: {
            countries
        }
    })
}

export const UPDATE_LANGUAGES = "UPDATE_LANGUAGES"
export const updateLanguages = (languages) => dispatch => {
    dispatch({
        type: UPDATE_LANGUAGES,
        payload: {
            languages
        }
    })
}

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES"
export const updateCategories = (categories) => dispatch => {
    dispatch({
        type: UPDATE_CATEGORIES,
        payload: {
            categories
        }
    })
}

export const UPDATE_SOURCES = "UPDATE_SOURCES"
export const updateSources = (sources) => dispatch => {
    dispatch({
        type: UPDATE_CATEGORY,
        payload: {
            sources
        }
    })
} 

export const UPDATE_POLLING_INTERVAL = "UPDATE_POLLING_INTERVAL"
export const updatePollingInterval = (interval) => dispatch => {
    dispatch({
        type: UPDATE_POLLING_INTERVAL,
        payload: {
            interval
        }
    })
}
