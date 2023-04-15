const User = require("../model/user");
const Expenses = require("../model/expense");
const sequelize = require("../model/database");

const premiumFeature = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "totalExpense"],
    });
    const total = [];
    const name = [];
    users.forEach((element) => {
      total.push(element.dataValues.totalExpense);
      name.push(element.dataValues.name);
    });
    total.sort((a, b) => b - a);
    res.status(200).json({ total, name });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = premiumFeature;
