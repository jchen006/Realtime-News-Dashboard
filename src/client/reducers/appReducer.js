const initialState = {
  currentPage: "",
  history: [],
  showModal: false,
};

export default (state = initialState, action) => {
  let app;
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      const { currentPage } = action.payload;
      const { history } = state;
      const updatedHistory = [...history];
      if (history.indexOf(currentPage) > 0) {
        const index = history.indexOf(currentPage);
        updatedHistory.splice(index);
      } else {
        updatedHistory.push(currentPage);
      }
      app = Object.assign({}, state, { currentPage, history: updatedHistory });
      return app;

    case "SHOW_MODAL":
      app = Object.assign({}, state, { showModal: !state.showModal });
      return app;
    default:
      return state;
  }
};
