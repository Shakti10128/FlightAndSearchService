const express = require("express");
const {FlightController} = require("../../controllers/index");

const router = express.Router();

router.post("/flights",FlightController.create);

module.exports = router;
