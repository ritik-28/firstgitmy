const Razorpay = require("razorpay");

const Order = require("../model/orders");
const User = require("../model/user");
require("dotenv").config();

const purchasePrimium = async (req, res, next) => {
  try {
    var rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const amount = 2500;

    rzp.orders.create({ amount, currency: "INR" }, async (err, order) => {
      if (err) {
        throw new Error("order is not generated");
      }
      await Order.create({
        orderid: order.id,
        status: "PENDING",
        userId: req.user.id,
      });
      return res.status(201).json({
        order,
        key_id: rzp.key_id,
      });
    });
  } catch (err) {
    res.json({ err: err });
  }
};

const updatetransactionstatus = async (req, res, next) => {
  const { order_id, payment_id } = req.body;
  const id = req.user.dataValues.id;
  if (payment_id) {
    Promise.all(
      await Order.update(
        {
          paymentid: payment_id,
          status: "SUCCESFULL",
        },
        {
          where: { orderid: order_id },
        }
      ),
      await User.update(
        {
          isPrimium: true,
        },
        {
          where: { id },
        }
      ),
      res.status(202).json({ success: true, message: "Transaction Successful" })
    );
  }
};

const paymentfailed = async (req, res, next) => {
  await Order.update(
    {
      status: "FAILED",
    },
    {
      where: { orderid: req.body.order_id },
    }
  ),
    res.status(201).json({ success: false, message: "Transaction Failed" });
};

module.exports = {
  purchasePrimium,
  updatetransactionstatus,
  paymentfailed,
};
