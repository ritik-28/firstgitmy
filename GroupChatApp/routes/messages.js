const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  setTimeout(() => {
    res.redirect("/login");
  }, 1000);
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  fs.appendFile(
    "messages.txt",
    `${req.body.username} : ${req.body.message} `,
    (err) => {
      if (err) console.log(err);
      else {
        fs.readFile("messages.txt", "utf-8", (err, data) => {
          res.send(
            `<form action='/' method='POST' onsubmit="document.getElementById('hide').value = localStorage.getItem('username')">${data}<br><input id="hide" type="hidden" name="username"><input type='text'name = 'message'><br><button style='background-color:black; color:white'>Send</button></form>`
          );
        });
      }
    }
  );
});

module.exports = router;
