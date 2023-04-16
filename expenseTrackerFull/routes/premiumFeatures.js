const express = require("express");
const authorization = require("../middleware/auth");

const premiumFeaturesControlller = require("../controllers/premiumFeatures");

const router = express.Router();

router.get("/showleaderboard", authorization, premiumFeaturesControlller);

module.exports = router;
