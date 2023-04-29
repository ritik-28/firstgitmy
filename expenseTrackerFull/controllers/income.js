const Income = require("../model/income");
const strVal = require("../util/strValidator");

const incomePost = async (req, res, next) => {
  try {
    const { description, amount } = req.body;
    if (strVal(description) || strVal(amount)) {
      return res.status(400).json({ err: "fill all feilds" });
    } else {

      const response = await Income.create({
        description,
        amount,
        userId: req.user.id,
      });

      return res
        .status(201)
        .json({ msg: "new income has been created in table", id: response.id });
    }
  } catch (err) {
    return res.json({ err: err });
  }
};

const ITEM_PER_PAGE = 10;

const incomeGet = async (req, res, next) => {
  try {
    const page = +req.query.page || 1;
    const ITEM_PER_PAGE = 10;
    const getRes = await Income.findAll({
      where: {
        userId: req.user.id,
      },
      order: [["createdAt", "DESC"]],
      offset: (page - 1) * ITEM_PER_PAGE,
      limit: ITEM_PER_PAGE,
    });
    const totalIncome = await Income.count({
      where: {
        userId: req.user.id,
      },
    });
    const arr = [];
    getRes.forEach((element) => {
      arr.push(element.dataValues);
    });
    return res.json({ arr, totalIncome });
  } catch (err) {
    return res.json({ err: err });
  }
};

module.exports = { incomePost, incomeGet };
