import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { myHistory } from "./store";
import store from "./store";
import App from "./App";


ReactDOM.render(
  <Provider store={store}>
    <Router history={myHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

