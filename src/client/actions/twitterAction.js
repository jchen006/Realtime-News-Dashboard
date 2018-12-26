/**
 * UPDATE_FILTERS
 * UPDATE_LANGUAGE
 * UPDATE_MAX_DISPLAYED
 * UPDATE_THROTTLE
 */

export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const updateFilters = (filters) => dispatch => {
    dispatch({
        type: UPDATE_FILTERS,
        payload: {
            filters
        }
    })
}

export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE'
export const updateLanguage = (language) => dispatch => {
    dispatch({
        type: UPDATE_LANGUAGE,
        payload: {
            language
        }
    })
}

export const UPDATE_MAX_DISPLAYED = 'UPDATE_MAX_DISPLAYED'
export const updateMaxDisplay = (max) => dispatch => {
    dispatch({
        type: UPDATE_MAX_DISPLAYED,
        payload: {
            max
        }
    })
}

export const UPDATE_THROTTLE = 'UPDATE_THROTTLE'
export const updateThrottle = (throttle) => dispatch => {
    dispatch({
        type: UPDATE_THROTTLE,
        payload: {
            throttle
        }
    })
}