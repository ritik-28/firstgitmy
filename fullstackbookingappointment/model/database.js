const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "neelam@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
