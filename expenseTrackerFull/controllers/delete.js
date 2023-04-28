const Expenses = require("../model/expense");
const User = require("../model/user");
const Income = require("../model/income");

const deleteExpenses = async (req, res, next) => {
  try {
    const got = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    const deletedExp = await Expenses.findOne({
      where: {
        id: req.params.id,
      },
    });
    await Expenses.destroy({
      where: {
        id: req.params.id,
      },
    });
    const totalExpense = Number(got.totalExpense) + Number(deletedExp.amount);
    await User.update(
      {
        totalExpense: totalExpense,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );
    res.status(201).json("records deleted");
  } catch (err) {
    res.status(500).json({ err: err, success: false });
  }
};

const deleteIncomes = async (req, res, next) => {
  try {
    await Income.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json("records deleted");
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = {
  deleteExpenses,
  deleteIncomes,
};
