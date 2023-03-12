const express = require("express");
const app = express();

const messagesRoutes = require("./routes/messages");
const loginRoutes = require("./routes/login");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.use("/", messagesRoutes);
app.use(loginRoutes);

app.listen(4000);
