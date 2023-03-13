const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "contactus.html"));
});
app.use("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // send("<h1>Page not found</h1>");
});

app.listen(4000, () => console.log("server is running......."));
