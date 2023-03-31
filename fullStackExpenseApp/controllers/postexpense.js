const Expense = require("../model/expense");

const postExpenseController = async (req, res, next) => {
  try {
    const expense = req.body.expense;
    const description = req.body.description;
    const category = req.body.category;

    if (expense == "" || description == "" || category == "") {
      res.status(400).json({ error: "please fill all feilds" });
    } else {
      const data = await Expense.create({
        expense,
        description,
        category,
      });
      res.json(data);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = postExpenseController;
