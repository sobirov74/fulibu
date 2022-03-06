import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "font-awesome/css/font-awesome.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from './components/Redux/RootReducer';

const store = createStore(RootReducer)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render( app, document.getElementById("root"));

reportWebVitals();
