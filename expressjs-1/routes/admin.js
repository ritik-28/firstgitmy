const express = require("express");

const router = express.Router();

// /admin/add-product  => GET
router.get("/add-product", (req, res, next) => {
  console.log("in get add product middleware");
  res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' name='title'><input type='range' name='size'><button type='submit'>Add Product</button></form>"
  );
});

// /admin/add-product  => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log("in post add product middleware");
  // res.redirect("/");
  res.send("<h1>returning from admin.js post</h1>");
});

module.exports = router;
