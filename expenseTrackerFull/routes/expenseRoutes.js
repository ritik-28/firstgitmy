const express = require("express");

const router = express.Router();

const expenseControlller = require("../controllers/expense");

router.post("/expenses", expenseControlller.expensePost);
router.get("/expenses", expenseControlller.expenseGet);

module.exports = router;
