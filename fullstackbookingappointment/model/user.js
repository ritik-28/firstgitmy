const Sequelize = require("sequelize");

const sequelize = require("./database");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: " Must be a valid email address",
      },
    },
  },
  phone: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
