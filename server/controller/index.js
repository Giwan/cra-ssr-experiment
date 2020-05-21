import express from "express";
import path from "path";
import serverRenderer from "../middleware/renderer";
import configureStore from "../../src/store/configureStore";
// import { setMessage } from "../../src/store/reducers/appReducer";
import { setBook } from "../../src/store/reducers/bookReducer";
import fetch from "node-fetch";

const router = express.Router();

const actionIndex = async (req, res, next) => {
  try {
    const store = configureStore();
    const response = await fetch(
      "https://mytoori-service-acc.herokuapp.com/api/v2/item/id/5ceda4acace87fd1c4a17b6b/2"
    );
    if (!response.ok) {
      throw new error(`failed to get book data ${response.status}`);
    }

    const book = await response.json();
    // store.dispatch(setMessage("A message from the server"));
    store.dispatch(setBook(book));
    serverRenderer(store)(req, res, next);
  } catch (e) {
    console.error("handle this: ", e.message);
  }
};

// root (/) should always serve our server rendered page
router.use("^/$", actionIndex);

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "..", "build"), {
    maxAge: "30d",
  })
);

module.exports = router;
