import express from "express";
import path from "path";
import serverRenderer from "../middleware/renderer";
import configureStore from "../../src/store/configureStore";
import { setMessage } from "../../src/store/appReducer";

const router = express.Router();

const actionIndex = (req, res, next) => {
  const store = configureStore();
  store.dispatch(setMessage("A message from the server"));
  serverRenderer(store)(req, res, next);
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
