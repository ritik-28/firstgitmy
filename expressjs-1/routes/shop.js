const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("in the / middleware");
  res.send("<h1> hello from  / middleware</h1>");
});

module.exports = router;
