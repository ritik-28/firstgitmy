const express = require("express");

const router = express.Router();

const incomeController = require("../controllers/income");

router.post("/income", incomeController.incomePost);
router.get("/income", incomeController.incomeGet);

module.exports = router;
