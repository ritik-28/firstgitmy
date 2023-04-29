const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var cors = require("cors");

const sequelize = require("./model/database");
const User = require("./model/user");

const app = express();

const postuserRoutes = require("./routes/postuser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.post(postuserRoutes);
// app.get(postuserRoutes);
// app.delete(postuserRoutes);
app.use(postuserRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => console.log("serever is running"));
