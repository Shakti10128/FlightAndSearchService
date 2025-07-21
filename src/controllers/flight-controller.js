const {FlightService} = require("../services/index");
const successResponse = require("../utils//successResponse");
const {StatusCodes} = require("http-status-codes");
const {flightData} = require("../utils/index")

const flightService = new FlightService();


const create = async(req,res,next)=>{
    try {
        const flightDataBody =  flightData.getCreateFlightData(req);
        const response = await flightService.createFlight(flightDataBody);
        return successResponse(res,StatusCodes.CREATED,response,"flight created successfully")
    } catch (error) {
        next(error);
    }
}

const getAllFlight = async(req,res,next)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return successResponse(res,StatusCodes.OK,response,"all flight data fetched successfully")
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    getAllFlight
}