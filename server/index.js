import express from "express";
import router from "./controller/index";

const app = express();
const port = 4000;

// Tell the app to use the routes above
app.use(router);

// start the app
app.listen(port, () => {
    console.log(`express running on port ${port}`);
});

