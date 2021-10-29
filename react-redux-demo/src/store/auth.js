const initialState = {
  isAuthenticated: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH/LOGIN":
      return { isAuthenticated: true };
    case "AUTH/LOGOUT":
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export default counterReducer;
