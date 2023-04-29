const express = require("express");
const authorization = require("../middleware/auth");

const router = express.Router();

const incomeController = require("../controllers/income");

router.post("/income", authorization, incomeController.incomePost);
router.get("/income", authorization, incomeController.incomeGet);

module.exports = router;
