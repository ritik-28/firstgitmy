const User = require("../model/user");
const Expenses = require("../model/expense");
const sequelize = require("../model/database");

const premiumFeature = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["name", "totalExpense"],
      order: [["totalExpense", "DESC"]],
    });
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = premiumFeature;
