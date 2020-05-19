const express = require("express");
const path = require("path");
const serverRenderer = require("../middleware/renderer").default;

const router = express.Router();

// root (/) should always serve our server rendered page
router.use("^/$", serverRenderer());

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "..", "build"), {
    maxAge: "30d",
  })
);

module.exports = router;
