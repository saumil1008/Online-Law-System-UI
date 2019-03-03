import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createBrowserHistory from "history/createBrowserHistory";
import configStore from "./store/configStore";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "../node_modules/react-bootstrap/dist/react-bootstrap"

const customHistory = createBrowserHistory();
let store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
