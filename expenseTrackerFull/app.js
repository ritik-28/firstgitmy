const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const sequelize = require("./model/database");
const User = require("./model/user");
const Expense = require("./model/expense");
const Income = require("./model/income");
const Order = require("./model/orders");
const Forgotpassword = require("./model/ForgotPasswordRequests");

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined", { stream: accessLogStream }));

const expenseRoutes = require("./routes/expenseRoutes");
const IncomeRoutes = require("./routes/incomeRoutes");
const signRoutes = require("./routes/signRoutes");
const primiumRoutes = require("./routes/primium");
const premiumFeaturesRoutes = require("./routes/premiumFeatures");
const forgotpwdRoutes = require("./routes/forgot");
const downloadRoutes = require("./routes/downloadRoutes");

const monthdataRoutes = require("./routes/monthDataRoutes");
const deleteRoutes = require("./routes/delete");


User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Income);
Income.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);

app.use("/password", forgotpwdRoutes);
app.use("/user", downloadRoutes);

app.use(monthdataRoutes);

app.use(primiumRoutes);
app.use(signRoutes);
app.use(expenseRoutes);
app.use(IncomeRoutes);
app.use("/premium", premiumFeaturesRoutes);

app.use("/delete", deleteRoutes);


const port = process.env.PORT;

sequelize

  .then((result) => {
    // console.log(result);
    app.listen(port, () => console.log("server is running on port 3000"));
  })
  .catch((err) => {
    console.log(err);
  });
