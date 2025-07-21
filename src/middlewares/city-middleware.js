const { StatusCodes } = require("http-status-codes")
const AppError = require("../utils/error-handler")


const validateCityReq = (req,res,next) =>{
    // if the req body is missing or the city name is missing from the body
    if(!req.body || !req.body.name) {
        const error = new AppError("City Name is required",StatusCodes.BAD_REQUEST,"City Name is missing");
        next(error);
    }
    next();
}

module.exports = {
    validateCityReq
}