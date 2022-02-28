import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "font-awesome/css/font-awesome.css";
// import { createStore } from "redux";
// import { rootReducer } from "./components/Redux/RootReducer";
// import { Provider } from "react-redux";

// const store = createStore(rootReducer)


// const app = (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )

ReactDOM.render( <App/>, document.getElementById("root"));

reportWebVitals();
