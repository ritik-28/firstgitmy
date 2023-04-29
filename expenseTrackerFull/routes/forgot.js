const express = require("express");

const router = express.Router();

const forgotPwdControlller = require("../controllers/forgot");

router.post("/forgotpassword", forgotPwdControlller.forgotPwd);
router.get("/resetpassword/:id", forgotPwdControlller.resetPwd);
router.get("/updatepassword/:id", forgotPwdControlller.updatepassword);

module.exports = router;
