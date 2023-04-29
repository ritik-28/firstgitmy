const express = require("express");

const {
  adminController,
  adminPostController,
} = require("../controllers/admin");

const router = express.Router();

// /admin/add-product  => GET
router.get("/add-product", adminController);

// /admin/add-product  => POST
router.post("/add-product", adminPostController);

module.exports = router;
