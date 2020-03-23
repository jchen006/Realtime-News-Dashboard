export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'
export const updateCurrentPage = (currentPage) => dispatch => {
    dispatch({
        type: UPDATE_CURRENT_PAGE,
        payload: {
            currentPage
        }
    })
}