/**
 * UPDATE_QUERIES
 * UPDATE_COUNTRIES
 * UPDATE_LANGUAGES
 * UPDATE_CATEGORY
 * UPDATE_SOURCES
 * UPDATE_POLLING_INTERVAL
 * UPDATE_TIME_RANGE
 */
export const UPDATE_QUERY = 'UPDATE_QUERY'
export const updateQuery = (query) => dispatch => {
    dispatch({
        type: UPDATE_QUERY,
        payload: {
            query
        }
    })
}

export const UPDATE_COUNTRY = "UPDATE_COUNTRY"
export const updateCountry = (country) => dispatch => {
    dispatch({
        type: UPDATE_COUNTRY,
        payload: {
            country
        }
    })
}

export const UPDATE_LANGUAGE = "UPDATE_LANGUAGE"
export const updateLanguage = (language) => dispatch => {
    dispatch({
        type: UPDATE_LANGUAGE,
        payload: {
            language
        }
    })
}

export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const updateCategory = (category) => dispatch => {
    dispatch({
        type: UPDATE_CATEGORY,
        payload: {
            category
        }
    })
}

export const UPDATE_SOURCES = "UPDATE_SOURCES"
export const updateSources = (sources) => dispatch => {
    dispatch({
        type: UPDATE_SOURCES,
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
            polling_interval
        }
    })
}
