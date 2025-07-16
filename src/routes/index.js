const express = require('express');

const router = express.Router();

const {cityRoutes,flightRoutes,airportRoutes} = require("./v1/index");

router.use('/v1',cityRoutes);
router.use('/v1',flightRoutes);
router.use('/v1',airportRoutes);
module.exports = router;