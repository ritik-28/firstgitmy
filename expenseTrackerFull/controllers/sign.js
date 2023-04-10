const User = require("../model/user");
const bcrypt = require("bcrypt");
const strVal = require("../util/strValidator");


const signupPost = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // const emailExists = await User.findOne({ email });
    console.log(username, email, password);
    if (strVal(username) || strVal(email) || strVal(password)) {
      return res.status(400).json({ err: "fill all feilds" });
    } else {
      const emailpresent = await User.findOne({
        where: {
          email,
        },
      });
      if (emailpresent != null) {
        throw new Error("this email is already present");
      }

      bcrypt.hash(password, 10, async (err, hash) => {
        await User.create({
          name: username,
          email,
          password: hash,
        });
        return res.status(201).json(`succesfully created new user`);
      });
    }
  } catch (err) {
    return res.status(403).json({ err: err });
  }
};

const signinPost = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (strVal(email) || strVal(password)) {
      return res.status(400).json({ err: "fill all feilds" });
    }

    const emailExists = await User.findOne({
      where: {
        email,
      },
    });

    if (emailExists != null) {
      bcrypt.compare(password, emailExists.password, (err, result) => {
        if (err) {
          return res.status(500).json("something went wrong");
        } else if (result === true) {
          return res.json("user login succesful");
        } else {
          return res.status(401).json("User not authorized");
        }
      });
    } else {
      return res.status(404).json("user not found");
    }
  } catch (err) {
    return res.status(403).json({ err: err });
  }
};

module.exports = {
  signinPost,
  signupPost,
};
