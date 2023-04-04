const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./model/database");
const User = require("./model/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/signup", async (req, res, next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // const emailExists = await User.findOne({ email });
    if (username == "" || email == "" || password == "") {
      res.status(400).json({ err: "fill all feilds" });
    } else {
      const data = await User.create({
        name: username,
        email,
        password,
      });
      res.json(data);
    }
  } catch (err) {
    res.status(403).json({ err: `user already exist` });
  }
});

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => console.log("server is running on port 3000"));
