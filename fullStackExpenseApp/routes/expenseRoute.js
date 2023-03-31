const express = require("express");

const router = express.Router();

const postExpense = require("../controllers/postexpense");
const getExpense = require("../controllers/getUser");
const deleteExpense = require("../controllers/deleteUser");

router.post("/addexpense", postExpense);
router.get("/getexpense", getExpense);
router.delete("/deleteexpense/:id", deleteExpense);

module.exports = router;
