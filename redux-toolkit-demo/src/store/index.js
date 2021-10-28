import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isVisible: true,
};

// Prepare a slice of the global state
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // It seems to be allowed to mutate the state
      // It's translated into immutable code by Redux Toolkit internally
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    addNumber(state, action) {
      state.value += action.payload;
    },
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

// `counterSlice.actions` contains methods (action creators)
// For example, `counterSlice.actions.increment`
export const counterActions = counterSlice.actions;

export default store;
