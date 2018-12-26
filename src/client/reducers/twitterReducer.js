export default(state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_FILTERS':
            let twitter = Object.assign({}, state, { filters: action.filters})
            return { 
                twitter
            }
        case 'UPDATE_LANGUAGE':
            let twitter = Object.assign({}, state, { language: action.language })
            return { 
                twitter
            }
        case 'UPDATE_MAX_DISPLAYED':
            let twitter = Object.assign({}, state, { max: action.max })
            return {
                twitter
            }
        case 'UPDATE_THROTTLE':
            let twitter = Object.assign({}, state, { throttle: action.throttle })
            return {
                twitter
            }
        default:
            return state
    }
}