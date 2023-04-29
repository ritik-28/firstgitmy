const Expense = require("../model/expense");

const deleteExpenseController = async (req, res, next) => {
  try {
    if (req.params.id == "undefined") {
      res.status(400).json({ err: "id is missing" });
    } else {
      await Expense.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = deleteExpenseController;
