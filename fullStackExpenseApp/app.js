const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./model/database");
const Expense = require("./model/expense");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const expenseRoute = require("./routes/expenseRoute");

app.use(expenseRoute);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("server is running on port 3000"));
