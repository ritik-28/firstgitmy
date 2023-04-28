const express = require("express");
const authorization = require("../middleware/auth");

const router = express.Router();

const deleteController = require("../controllers/delete");

router.delete("/expense/:id", authorization, deleteController.deleteExpenses);
router.delete("/income/:id", authorization, deleteController.deleteIncomes);

module.exports = router;
