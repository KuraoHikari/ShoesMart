import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import fetch from "./reducer";

const store = createStore(
  combineReducers({
    fetch: fetch,
  }),
  applyMiddleware(thunk)
);

export default store;
