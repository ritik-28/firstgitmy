const Sequelize = require("sequelize");

const sequelize = new Sequelize("max_pro", "root", "neelam@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
