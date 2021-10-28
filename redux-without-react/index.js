const redux = require("redux");

// - Parameters of a reducer function: state, action
//   - Both of them are provided by Redux
//   - We should provide a default value for state initialization
// - The reducer function should return a new state
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Redux will execute `counterSubscriber` whenever the data in the store changes
store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" }); // { counter: 1 }
store.dispatch({ type: "INCREMENT" }); // { counter: 2 }
store.dispatch({ type: "DECREMENT" }); // { counter: 1 }
