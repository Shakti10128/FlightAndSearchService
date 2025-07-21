const { StatusCodes } = require("http-status-codes");
const {CityService} = require("../services/index");
const successResponse = require("../utils/successResponse")
const {cityData} = require("../utils/index");

const cityService = new CityService();

const create = async(req,res,next)=>{
    try {
        const cityBody = cityData.getCreateCityData(req);
        const city = await cityService.createCity(cityBody);
        
        return successResponse(res,StatusCodes.CREATED,city,"City created successfully");
    } catch (error) {
        console.error("🔴 Error in cityController → create:", error);
        next(error)
    }
}

const destroy = async(req,res,next)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return successResponse(res,StatusCodes.OK,response,"City deleted successfully");
    } catch (error) {
        console.error("🔴 Error in cityController → destroy:", error);
        next(error);
    }
}


const update = async(req,res,next)=>{
    try {
        const cityBody = cityData.getUpdateCityData(req);
        const response = await cityService.updateCity(req.params.id,cityBody);
        return successResponse(res,StatusCodes.OK,response,"City updated successfully");
    } catch (error) {
        console.error("🔴 Error in cityController → update:", error);
        next(error)
    }
}

// GET -> 'city/:id'
const get = async(req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return successResponse(res,StatusCodes.OK,response,"City fetched successfully");
    } catch (error) {
        console.error("🔴 Error in cityController → getCity:", error);
        next(error)
    }
}

const getAllCities = async(req,res)=>{
    try {
        const response = await cityService.getAllCities(req.query);

        return successResponse(res,StatusCodes.OK,response,"All cities fetched successfully");
    } catch (error) {
        console.error("🔴 Error in cityController → getAllCity:", error);
        next(error)
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAllCities
}