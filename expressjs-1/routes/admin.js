const path = require("path");

const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product  => GET
router.get("/add-product", (req, res, next) => {
  console.log("in get add product middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

// /admin/add-product  => POST
router.post("/add-product", (req, res, next) => {
  console.log("in post add product middleware");
  res.send("<h1>returning from admin.js post</h1>");
});

module.exports = router;
