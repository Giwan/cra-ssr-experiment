import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Router, Route, Switch } from "react-router-dom";
import AlternativeAppPage from "./components/AlternativeAppPage/AlternativeAppPage";
import history from "./history";

const store = configureStore(window.REDUX_STATE || {});
const AppBundle = () => (
  <Router history={history}>
    <Provider store={store}>
      <Switch>
        <Route path="/test" component={AlternativeAppPage} />
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </Router>
);

// ensures the website can dynamically respond to the user (Javascript)
const root = document.getElementById("root");
root.hasChildNodes()
  ? hydrate(<AppBundle />, root)
  : render(<AppBundle />, root);
