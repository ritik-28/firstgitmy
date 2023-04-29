const express = require("express");

const router = express.Router();

const signController = require("../controllers/sign");

router.post("/signup", signController.signupPost);

router.post("/login", signController.signinPost);

module.exports = router;
