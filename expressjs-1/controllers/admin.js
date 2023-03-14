const path = require("path");
const rootDir = require("../util/path");

exports.adminController = (req, res) => {
  console.log("in get add product middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.adminPostController = (req, res) => {
  console.log("in post add product middleware");
  res.send("<h1>returning from admin.js post</h1>");
};
