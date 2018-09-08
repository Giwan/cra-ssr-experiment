import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../src/App";

const path = require("path");
const fs = require("fs");

export default () => (req, res) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");
    fs.readFile(filePath, "utf8", (error, htmlData) => {
        if (error) {
            console.error("error", error);
            return response.status(404).end();
        }

        // render the app as a string
        const html = renderToString(<App />);
        // const html = `<h1>This is rendered on the server</h1>`

        // inject the rendered app into our html and send it
        return res.send(
            htmlData
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        );
    })
}

