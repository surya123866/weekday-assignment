// store.js
import { createStore, combineReducers } from "redux";
import filterReducer from "../reducers/reducres";

const rootReducer = combineReducers({
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;
