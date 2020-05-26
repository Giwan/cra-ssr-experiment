import express from "express";
import path from "path";
import serverRenderer from "../middleware/renderer";
import configureStore from "../../src/store/configureStore";
import routes from "../../src/routes";
import { matchPath } from "react-router-dom";

const router = express.Router();

let store = configureStore();

const isServerRenderingRequired = async (req, res, next) => {
  const route = routes.find((r) => matchPath(req.path, r));

  if (!route) {
    return next();
  }

  // render on the server
  store = route.loadData ? await route.loadData(store, req.path) : store;
  serverRenderer(store)(req, res, next);
};

router.use(isServerRenderingRequired);

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "..", "build"), {
    maxAge: "30d",
  })
);

module.exports = router;
