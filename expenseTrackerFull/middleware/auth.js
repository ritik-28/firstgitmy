const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const result = await User.findByPk(user.userId);
    req.user = result;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false });
  }
};

module.exports = authenticate;
