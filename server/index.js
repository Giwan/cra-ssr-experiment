import express from "express";
import router from "./controller/index";
import Loadable from "react-loadable";

const app = express();
const port = 4000;

// Tell the app to use the routes above
app.use(router);

// start the app
Loadable.preloadAll().then(() => {

    app.listen(port, () => {
        console.log(`express running on port ${port}`);
    });
})

