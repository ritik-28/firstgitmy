const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./model/database");
const User = require("./model/user");

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
      const data = await User.create({
        name: username,
        email,
        password,
      });
      return res.status(201).json(`succesfully created new user`);
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
      const passwordtrue = await User.findOne({
        where: {
          email,
          password,
        },
      });
      if (passwordtrue != null) {
        res.json("user login succesful");
      } else {
        res.status(401).json("User not authorized");
      }
    } else {
      res.status(404).json("user not found");
    }
  } catch (err) {
    res.status(403).json({ err: err });
  }
});

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000, () => console.log("server is running on port 3000"));
  })
  .catch((err) => {
    console.log(err);
  });
