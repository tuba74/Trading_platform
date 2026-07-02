const express = require("express");
const router  = express.Router();

const hold_Pos = require("../controllers/holds&PosControl.js");
const catchError = require("../services/catchError.js");
const {authMiddleware} = require("../middlewares/authMiddleware.js");

router.route("/allHoldings", ).get(authMiddleware, catchError(hold_Pos.allHoldings));
router.route("/allPositions", ).get(authMiddleware, catchError(hold_Pos.allPositions));

module.exports =  router;