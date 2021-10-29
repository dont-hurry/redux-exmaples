import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    auth: authReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
