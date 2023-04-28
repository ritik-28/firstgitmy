const Expenses = require("../model/expense");
const strVal = require("../util/strValidator");
const User = require("../model/user");
const sequelize = require("../model/database");

const expensePost = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { description, amount, category } = req.body;
    if (strVal(description) || strVal(amount) || strVal(category)) {
      return res.status(400).json({ err: "fill all feilds" });
    } else {
      const expense = await Expenses.create(
        {
          description,
          amount,
          category,
          userId: req.user.id,
        },
        { transaction: t }
      );
      const totalExpense =
        Number(req.user.totalExpense) + Number(expense.dataValues.amount);
      await User.update(
        {
          totalExpense: totalExpense,
        },
        { where: { id: req.user.id }, transaction: t }
      );
      await t.commit();
      return res
        .status(201)
        .json({ msg: "new expense created in table", id: expense.id });
    }
  } catch (err) {
    await t.rollback();
    return res.status(403).json({ err: err });
  }
};

const expenseGet = async (req, res, next) => {
  try {
    const page = +req.query.page || 1;
    const ITEM_PER_PAGE = 10;
    const getRes = await Expenses.findAll({
      where: {
        userId: req.user.id,
      },
      order: [["createdAt", "DESC"]],
      offset: (page - 1) * ITEM_PER_PAGE,
      limit: ITEM_PER_PAGE,
    });
    const totalExpense = await Expenses.count({
      where: {
        userId: req.user.id,
      },
    });
    const arr = [];
    getRes.forEach((element) => {
      arr.push(element.dataValues);
    });
    const isPremium = req.user.dataValues.isPrimium;
    return res.json({ arr, isPremium, totalExpense });
  } catch (err) {
    return res.json({ err: err });
  }
};

module.exports = { expensePost, expenseGet };
