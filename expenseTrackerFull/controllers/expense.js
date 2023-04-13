const Expenses = require("../model/expense");
const strVal = require("../util/strValidator");
const User = require("../model/user");

const expensePost = async (req, res, next) => {
  try {
    const { description, amount, category } = req.body;
    if (strVal(description) || strVal(amount) || strVal(category)) {
      return res.status(400).json({ err: "fill all feilds" });
    } else {
      const expense = await Expenses.create({
        description,
        amount,
        category,
        userId: req.user.id,
      });
      return res.status(201).json("new expense created in table");
    }
  } catch (err) {
    return res.status(403).json({ err: err });
  }
};

const expenseGet = async (req, res, next) => {
  try {
    const getRes = await Expenses.findAll({
      where: {
        userId: req.user.id,
      },
    });
    const arr = [];
    getRes.forEach((element) => {
      arr.push(element.dataValues);
    });
    const isPrimium = await User.findAll({
      where: {
        id: req.user.id,
      },
    });
    return res.json({ arr, isPrimium });
  } catch (err) {
    return res.json({ err: err });
  }
};

module.exports = { expensePost, expenseGet };
