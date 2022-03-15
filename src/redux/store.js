import { createStore } from "redux";
import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  login: loginReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
