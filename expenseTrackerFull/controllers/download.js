const Expenses = require("../model/expense");
const User = require("../model/user");
const sequelize = require("../model/database");
const userServices = require("../services/userServices");

const S3Service = require("../services/S3Services");

const downloadExpense = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const expenses = await userServices.getExpenses(req);
    const stringinfyExpenses = JSON.stringify(expenses);

    const filenname = `expense${userId}/${new Date()}.txt`;
    const fileUrl = await S3Service.uploadToS3(stringinfyExpenses, filenname);
    res.status(201).json({ fileUrl, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ fileUrl: "", success: false });
  }
};

module.exports = downloadExpense;
