const express = require("express");
const {AirportController} = require("../../controllers/index");

const router = express.Router();

router.post('/airports',AirportController.create);

module.exports = router;
