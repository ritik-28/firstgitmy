const express = require("express");
const authorization = require("../middleware/auth");

const monthYearDataControlller = require("../controllers/monthdata");

const router = express.Router();

router.get("/monthdata", authorization, monthYearDataControlller.monthdata);
router.get("/yeardata", authorization, monthYearDataControlller.yeardata);

module.exports = router;
