const User = require("../model/user");
const Expenses = require("../model/expense");
const sequelize = require("../model/database");

const premiumFeature = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name"],
    });
    const userAgregateExpenses = await Expenses.findAll({
      attributes: [
        "userId",
        [sequelize.fn("sum", sequelize.col("amount")), "total_cost"],
      ],
      group: ["userId"],
    });

    console.log(userAgregateExpenses);
    const userDetails = [];
    users.forEach((user) => {
      userDetails.push({
        name: user.dataValues.name,
        total_cost: userAgregateExpenses[0].dataValues.total_cost,
      });
    });

    userDetails.sort((a, b) => b.total_cost - a.total_cost);
    res.status(200).json(userDetails);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = premiumFeature;
