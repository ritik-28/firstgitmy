const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>hello from Express! </h1>"); //content-type = text/html
  // res.send({ name: "ritik" });   //content-type = application/json
});

//creating server and also listening now in one line using express
app.listen(4000);
