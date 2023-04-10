const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./model/database");
const User = require("./model/user");
const Expense = require("./model/expense");
const Income = require("./model/income");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const expenseRoutes = require("./routes/expenseRoutes");
const IncomeRoutes = require("./routes/incomeRoutes");
const signRoutes = require("./routes/signRoutes");

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Income);
Income.belongsTo(User);

app.use(signRoutes);
app.use(expenseRoutes);
app.use(IncomeRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000, () => console.log("server is running on port 3000"));
  })
  .catch((err) => {
    console.log(err);
  });
