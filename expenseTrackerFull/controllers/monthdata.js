const Expenses = require("../model/expense");
const { Op, Sequelize } = require("sequelize");
const Income = require("../model/income");

const monthdata = async (req, res, next) => {
  try {
    const month = req.query.month;
    const dataexpense = await Expenses.findAll({
      attributes: ["amount", "createdAt", "description", "category"],
      where: {
        createdAt: {
          [Op.gte]: month,
        },
        userId: req.user.id,
      },
      order: ["createdAt"],
    });

    const dataIncome = await Income.findAll({
      attributes: ["amount", "createdAt", "description"],
      where: {
        createdAt: {
          [Op.gte]: month,
        },
        userId: req.user.id,
      },
      order: ["createdAt"],
    });
    res.status(200).json({ dataexpense, dataIncome });
  } catch (err) {
    res.status(500).json({ success: false, err: err });
  }
};

const yeardata = async (req, res, next) => {
  try {
    console.log(req.query.year);
    const month = req.query.year;
    const dataexpense = await Expenses.findAll({
      attributes: ["amount", "createdAt"],
      where: {
        createdAt: {
          [Op.gte]: month,
        },
        userId: req.user.id,
      },
      order: ["createdAt"],
    });
    const dataIncome = await Income.findAll({
      attributes: ["amount", "createdAt"],
      where: {
        createdAt: {
          [Op.gte]: month,
        },
        userId: req.user.id,
      },
      order: ["createdAt"],
    });
    res.status(200).json({ dataexpense, dataIncome });
  } catch (err) {
    res.status(500).json({ err: err, yeardata: "no data found error" });
  }
};

module.exports = { monthdata, yeardata };
