const Sequelize = require("sequelize");
const sequelize = require("./database");

const Forgotpassword = sequelize.define("forgotpassword", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  isactive: Sequelize.BOOLEAN,
  expiresby: Sequelize.DATE,
});

module.exports = Forgotpassword;
