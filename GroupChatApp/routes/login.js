const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/" method="POST" onsubmit= "localStorage.setItem(`username`,document.getElementById(`username`).value)"><label>Username : </label><br><input id="username" type="text" name="username"><input id="message" type="hidden" name="message"><br><button>Send</button></form>'
  );
});

module.exports = router;
