// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node_complete",
//   password: "neelam@2023",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "neelam@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
