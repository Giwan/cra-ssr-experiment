import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../src/App";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import serialize from "serialize-javascript";

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

    const context = {};

    // render the app as a string
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    const reduxState = serialize(store.getState());

    // inject the rendered app into our html and send it
    // IMPORTANT: No spaces on `window.REDUX_STATE="{}"`. The response is built from the uglified html file
    return res.send(
      htmlData
        .replace("window.REDUX_STATE={}", `window.REDUX_STATE = ${reduxState}`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
