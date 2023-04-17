const express = require("express");
const authorization = require("../middleware/auth");

const router = express.Router();

const forgotpasswordControlller = require("../controllers/forgot");

router.post("/forgotpassword", forgotpasswordControlller);

module.exports = router;
