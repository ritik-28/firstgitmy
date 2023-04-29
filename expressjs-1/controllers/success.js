const path = require("path");

const successController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
};

module.exports = successController;
