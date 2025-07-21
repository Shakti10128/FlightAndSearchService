const { StatusCodes } = require("http-status-codes");
const {AirportService} = require("../services/index");
const successResponse = require("../utils/successResponse");    


const airportService = new AirportService();

const create = async(req,res,next)=>{
    try {
        const airportDataBody = {
            "name":req.body.name,
            "cityId":req.body.cityId
        }
        const response = await airportService.create(airportDataBody);
        return successResponse(res,StatusCodes.CREATED,response,"Airport created successfully");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    create
}