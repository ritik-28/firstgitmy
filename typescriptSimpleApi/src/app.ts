// const express = require("express");

//after module resolution
// import express = require("express");
import express from "express";
import todoRoutes from "./routes/todos";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(todoRoutes);

app.listen(3000, () => {
  console.log("server is  running");
});
