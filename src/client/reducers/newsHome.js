const initialState = {
    error: ''
}

export default (state=initialState, action) => {
    let newsHome
    switch(action.type) {
        case 'UPDATE_ERROR':
            newsHome = Object.assign({}, state, { error: action.payload.error});
            return newsHome;
        default:
            return state;
    }
}