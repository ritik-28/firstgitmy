const path = require("path");

const contactusController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
};

module.exports = contactusController;
