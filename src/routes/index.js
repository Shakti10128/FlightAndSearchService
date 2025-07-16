const express = require('express');

const router = express.Router();

const {cityRoutes,flightRoutes} = require("./v1/index");

router.use('/v1',cityRoutes);
router.use('/v1',flightRoutes);
module.exports = router;