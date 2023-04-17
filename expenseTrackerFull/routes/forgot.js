const express = require("express");

const router = express.Router();

const forgotPwdControlller = require("../controllers/forgot");

router.post("/forgotpassword", forgotPwdControlller);

module.exports = router;
