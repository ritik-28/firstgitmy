const Expense = require("../model/expense");

const getExpenseController = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = getExpenseController;
