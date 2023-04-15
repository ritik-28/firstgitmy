const User = require("../model/user");
const Expenses = require("../model/expense");
const sequelize = require("../model/database");

const premiumFeature = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "name",
        [sequelize.fn("sum", sequelize.col("expenses.amount")), "total_cost"],
      ],
      include: [
        {
          model: Expenses,
          attributes: [],
        },
      ],
      group: ["users.id"],
      order: [["total_cost", "DESC"]],
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = premiumFeature;
