const express = require("express");
const authorization = require("../middleware/auth");

const router = express.Router();

const expenseControlller = require("../controllers/expense");

router.post("/expenses", authorization, expenseControlller.expensePost);
router.get("/expenses", authorization, expenseControlller.expenseGet);

module.exports = router;
