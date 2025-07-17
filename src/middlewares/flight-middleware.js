

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
            return res.status(400).json({
                success:false,
                message:`Required field ${field} is missing`,
                data:{},
                err: "Invalid req body for creating the flight"
            });
        }
    }
    next(); //calling the next middleware if any
}

module.exports = {
    validateCreateFlight
}