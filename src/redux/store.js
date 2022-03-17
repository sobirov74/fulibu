import { createStore } from "redux";
import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { accountReducer } from "./accountReducer";
import { confirmReducer } from "./confirmReducer";
import { phoneReducer } from "./phoneReducer";
import { linkReducer } from "./linkReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  account: accountReducer,
  token: confirmReducer,
  phone: phoneReducer,
  link: linkReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["phone", "token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
