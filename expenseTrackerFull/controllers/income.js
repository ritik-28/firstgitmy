const Income = require("../model/income");
const strVal = require("../util/strValidator");

const incomePost = async (req, res, next) => {
  try {
    const { description, amount } = req.body;
    if (strVal(description) || strVal(amount)) {
      return res.status(400).json({ err: "fill all feilds" });
    } else {
      await Income.create({
        description,
        amount,
        userId: req.user.id,
      });
      return res.status(201).json("new income has been created in table");
    }
  } catch (err) {
    return res.json({ err: err });
  }
};

const incomeGet = async (req, res, next) => {
  try {
    const getRes = await Income.findAll({
      where: {
        userId: req.user.id,
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

module.exports = { incomePost, incomeGet };
