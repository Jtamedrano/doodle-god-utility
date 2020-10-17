import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function rend() {
  ReactDOM.render(<Main store={store} />, document.getElementById("root"));
}

store.subscribe(rend);

rend();

serviceWorker.unregister();
