const express = require("express");
const authorization = require("../middleware/auth");

const router = express.Router();

const downloadController = require("../controllers/download");

router.get("/download", authorization, downloadController);

module.exports = router;
