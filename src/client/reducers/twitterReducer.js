export default(state = {}, action) => {
    let twitter
    switch(action.type) {
        case 'UPDATE_FILTERS':
            twitter = Object.assign({}, state, { filters: action.payload.filters})
            return twitter
        case 'UPDATE_LANGUAGE':
            twitter = Object.assign({}, state, { language: action.payload.language })
            return twitter
        case 'UPDATE_MAX_DISPLAYED':
            console.log(action.max)
            twitter = Object.assign({}, state, { max: action.payload.max })
            return twitter
        case 'UPDATE_THROTTLE':
            twitter = Object.assign({}, state, { throttle: action.payload.throttle })
            return twitter
        default:
            return state
    }
}