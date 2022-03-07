import { createStore } from "redux";
import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  posts: postsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
