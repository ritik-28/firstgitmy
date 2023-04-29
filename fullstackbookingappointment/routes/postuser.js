const express = require("express");
const router = express.Router();

const postuserController = require("../controllers/postuser");

router.post("/user", postuserController.postuserController);
router.get("/getuser", postuserController.getuser);
router.delete("/deleteuser/:email", postuserController.deleteuser);

module.exports = router;
