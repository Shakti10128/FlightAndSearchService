const express = require("express");
const {CityController} = require("../../controllers/index");
const {CityMiddleware} = require("../../middlewares/index")

const router = express.Router();

router.post('/city',CityMiddleware.validateCityReq,CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityMiddleware.validateCityReq,CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAllCities);

module.exports = router;
