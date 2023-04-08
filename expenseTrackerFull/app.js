const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");

const sequelize = require("./model/database");
const User = require("./model/user");
const Expenses = require("./model/expense");
const Income = require("./model/income");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

function isStrValidator(str) {
  if (str == undefined || str.length == 0) {
    return true;
  }
}

app.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // const emailExists = await User.findOne({ email });
    if (
      isStrValidator(username) ||
      isStrValidator(email) ||
      isStrValidator(password)
    ) {
      res.status(400).json({ err: "fill all feilds" });
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
        res.status(201).json(`succesfully created new user`);
      });
    }
  } catch (err) {
    res.status(403).json({ err: err });
  }
});

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (isStrValidator(email) || isStrValidator(password)) {
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
          res.status(500).json("something went wrong");
        } else if (result === true) {
          res.json("user login succesful");
        } else {
          res.status(401).json("User not authorized");
        }
      });
    } else {
      res.status(404).json("user not found");
    }
  } catch (err) {
    res.status(403).json({ err: err });
  }
});

app.post("/expenses", async (req, res, next) => {
  try {
    const { description, amount, category } = req.body;
    if (
      isStrValidator(description) ||
      isStrValidator(amount) ||
      isStrValidator(category)
    ) {
      res.status(400).json({ err: "fill all feilds" });
    } else {
      const expense = await Expenses.create({
        description,
        amount,
        category,
      });
      res.status(201).json("new expense created in table");
    }
  } catch (err) {
    res.status(403).json({ err: err });
  }
});

app.get("/expenses", async (req, res, next) => {
  try {
    const getRes = await Expenses.findAll();
    const arr = [];
    getRes.forEach((element) => {
      arr.push(element.dataValues);
    });
    res.json(arr);
  } catch (err) {
    res.json({ err: err });
  }
});

app.post("/income", async (req, res, next) => {
  try {
    const { description, amount } = req.body;
    if (isStrValidator(description) || isStrValidator(amount)) {
      res.status(400).json({ err: "fill all feilds" });
    } else {
      await Income.create({
        description,
        amount,
      });
      res.status(201).json("new income has been created in table");
    }
  } catch (err) {
    res.json({ err: err });
  }
});

app.get("/income", async (req, res, next) => {
  try {
    const getRes = await Income.findAll();
    const arr = [];
    getRes.forEach((element) => {
      arr.push(element.dataValues);
    });
    res.json(arr);
  } catch (err) {
    res.json({ err: err });
  }
});

sequelize
  .sync({ alter: true })
  .then((result) => {
    // console.log(result);
    app.listen(3000, () => console.log("server is running on port 3000"));
  })
  .catch((err) => {
    console.log(err);
  });
