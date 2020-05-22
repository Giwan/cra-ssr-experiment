import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../src/App";
import { Provider } from "react-redux";
import { StaticRouter, Route } from "react-router-dom";

const path = require("path");
const fs = require("fs");

export default (store) => (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");
  fs.readFile(filePath, "utf8", (error, htmlData) => {
    if (error) {
      console.error("error", error);
      return res.status(404).end();
    }

    // render the app as a string
    const html = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <Provider store={store}>
          <Route path="/" component={App} />
        </Provider>
      </StaticRouter>
    );

    const reduxState = JSON.stringify(store.getState());

    // inject the rendered app into our html and send it
    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('"__SERVER_REDUX_STATE__"', reduxState)
    );
  });
};
