
const {flightRequiredFields} = require('../middlewares/flight-middleware');

const getCreateFlightData = (req)=>{
    const flightData = { // required fields to create the flight
        "flightNumber":            req.body.flightNumber,
        "airplaneId":              req.body.airplaneId,
        "arrivalAirportId":        req.body.arrivalAirportId,
        "departureAirportId":      req.body.departureAirportId,
        "arrivalTime":             req.body.arrivalTime,
        "departureTime":           req.body.departureTime,
        "price":                   req.body.price
    }
    return flightData;
}

const getUpdateFlightData = (req) => {
    const flightId = req.params.id;
    const allowedFields = [...flightRequiredFields, "totalSeats", "boardingGate"];
    const data = {};

    for (const field of allowedFields) {
        if (req.body.hasOwnProperty(field)) {
            data[field] = req.body[field];
        }
    }
    return { flightId, data };
};


module.exports = {
    getCreateFlightData,
    getUpdateFlightData
}