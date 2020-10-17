import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import data from "./data/sampleGameData.json";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Main data={data} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
