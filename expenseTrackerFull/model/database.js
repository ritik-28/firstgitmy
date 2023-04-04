const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense", "root", "neelam@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
