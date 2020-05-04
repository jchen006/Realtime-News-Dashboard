export const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";
export const updateCurrentPage = (currentPage) => (dispatch) => {
  dispatch({
    type: UPDATE_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  });
};

export const SHOW_MODAL = "SHOW_MODAL";
export const showModal = () => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
  });
};
