const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo", "root", "neelam@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
