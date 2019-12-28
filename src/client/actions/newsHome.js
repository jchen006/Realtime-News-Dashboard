export const UPDATE_ERROR = 'UPDATE_ERROR';
export const updateError = (error) => dispatch => {
    dispatch({
        type: UPDATE_ERROR,
        payload: {
            error
        }
    })
}