const Expenses = require("../model/expense");
const strVal = require("../util/strValidator");

const expensePost = async (req, res, next) => {
  try {
    const { description, amount, category } = req.body;
    const userId = req.headers["id"];
    if (strVal(description) || strVal(amount) || strVal(category)) {
      return res.status(400).json({ err: "fill all feilds" });
    } else {
      const expense = await Expenses.create({
        description,
        amount,
        category,
        userId: userId,
      });
      return res.status(201).json("new expense created in table");
    }
  } catch (err) {
    return res.status(403).json({ err: err });
  }
};

const expenseGet = async (req, res, next) => {
  try {
    const userId = req.headers["id"];
    const getRes = await Expenses.findAll({
      where: {
        userId,
      },
    });
    const arr = [];
    getRes.forEach((element) => {
      arr.push(element.dataValues);
    });
    return res.json(arr);
  } catch (err) {
    return res.json({ err: err });
  }
};

module.exports = { expensePost, expenseGet };
