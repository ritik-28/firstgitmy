const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("this always runs");
//   next();
// });      //we are not sending anything from here so we can move to another code, no error here  that response is already sent

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("in the add product middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><input type='range' name='size'><button type='submit'>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  console.log("in  product middleware");
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the / middleware");
  // res.send("<h1>hello from  / middleware</h1>");
});

//creating server and also listening now in one line using express
app.listen(4000);
