const initialState = {
  value: 0,
  isVisible: true,
};

const counterReducer = (state = initialState, action) => {
  // Caution: you should never mutate the existing state

  switch (action.type) {
    case "COUNTER/INCREMENT":
      // Redux will not merge the returned object with the existing state
      // It just overwrites the existing state
      return { ...state, value: state.value + 1 };
    case "COUNTER/DECREMENT":
      return { ...state, value: state.value - 1 };
    case "COUNTER/ADD_NUMBER":
      return { ...state, value: state.value + action.payload };
    case "COUNTER/TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};

export default counterReducer;
