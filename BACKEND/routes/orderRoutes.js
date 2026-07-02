const express = require("Express");
const router  = express.Router();
const ordersController = require("../controllers/orderControl.js");
const catchError = require("../services/catchError.js");
const {authMiddleware} = require("../middlewares/authMiddleware");

router.route("/allOrders", ).get(authMiddleware,  catchError(ordersController.allOrders))
router.route("/newOrders", ).post(authMiddleware, catchError(ordersController.newOrders))

module.exports =  router;