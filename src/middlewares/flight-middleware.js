const {StatusCodes} = require("http-status-codes");
const AppError = require("../utils/error-handler");

const validateCreateFlight = (req,res,next)=>{
    const requiredFields = [ // required fields to create the flight
        "flightNumber",
        "airplaneId",
        "arrivalAirportId",
        "departureAirportId",
        "arrivalTime",
        "departureTime",
        "price"
    ];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            const error = new AppError(`Required field ${field} is missing`,StatusCodes.BAD_REQUEST,"Invalid req body for creating the flight");
            next(error);
        }
    }
    next(); //calling the next middleware if any
}

module.exports = {
    validateCreateFlight
}