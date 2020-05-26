import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Router } from "react-router-dom";
import history from "./history";

const reduxData = window.REDUX_STATE; // from server
const store = configureStore(reduxData);
const AppBundle = () => (
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

// ensures the website can dynamically respond to the user (Javascript)
const root = document.getElementById("root");
root.hasChildNodes()
  ? hydrate(<AppBundle />, root)
  : render(<AppBundle />, root);
