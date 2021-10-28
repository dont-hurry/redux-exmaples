import { createStore } from "redux";

const initialState = {
  value: 0,
  isVisible: true,
};

const counterReducer = (state = initialState, action) => {
  // Caution: you should never mutate the existing state

  switch (action.type) {
    case "INCREMENT":
      // Redux will not merge the returned object with the existing state
      // It just overwrites the existing state
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "ADD_NUMBER":
      return { ...state, value: state.value + action.payload };
    case "TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
