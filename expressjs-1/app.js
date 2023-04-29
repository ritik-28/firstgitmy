const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const contactusController = require("./controllers/contactus");
const successController = require("./controllers/success");
const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/contactus", contactusController);
app.use("/success", successController);
app.use(shopRoutes);

app.use(errorController);
// send("<h1>Page not found</h1>");

app.listen(4000, () => console.log("server is running......."));
