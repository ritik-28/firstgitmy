const Order = require("../model/orders");
const User = require("../model/user");
const Expense = require("../model/expense");
const Expenses = require("../model/expense");

const premiumFeature = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    const users = await User.findAll();
    const userAgregateExpenses = {};
    expenses.forEach((element) => {
      if (userAgregateExpenses[element.dataValues.userId]) {
        userAgregateExpenses[element.dataValues.userId] =
          userAgregateExpenses[element.dataValues.userId] +
          element.dataValues.amount;
      } else {
        userAgregateExpenses[element.dataValues.userId] =
          element.dataValues.amount;
      }
    });
    const userDetails = [];
    users.forEach((user) => {
      userDetails.push({
        name: user.dataValues.name,
        total_cost: userAgregateExpenses[user.id],
      });
    });

    userDetails.sort((a, b) => b.total_cost - a.total_cost);
    res.status(200).json(userDetails);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = premiumFeature;
