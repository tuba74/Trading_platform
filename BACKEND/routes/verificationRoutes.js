const express = require("express");
const router  = express.Router();
const catchError = require("../services/catchError.js");
const verifyControllers = require("../controllers/verifyControl.js");
const {authMiddleware} = require("../middlewares/authMiddleware");

router.route("/login", ).post(catchError(verifyControllers.login))
router.route("/signup", ).post(catchError(verifyControllers.signup))
router.route("/verify", ).get(authMiddleware, catchError(verifyControllers.verify))

module.exports =  router;