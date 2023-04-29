const express = require("express");
const authorization = require("../middleware/auth");

const router = express.Router();

const primiumControlller = require("../controllers/primium");

router.get(
  "/primiummembership",
  authorization,
  primiumControlller.purchasePrimium
);

router.post(
  "/updatetransactionstatus",
  authorization,
  primiumControlller.updatetransactionstatus
);

router.post("/failedpayment", authorization, primiumControlller.paymentfailed);

module.exports = router;
