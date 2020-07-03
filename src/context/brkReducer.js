const brkReducer = (state, action) => {
  switch (action.type) {
    case "SENDING_REQUIST":
      return { ...state, loading: true };
    case "GET_REQUIST":
      return { ...state, characters: action.data };
    case "REQUIST_FINISHED":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default brkReducer;
