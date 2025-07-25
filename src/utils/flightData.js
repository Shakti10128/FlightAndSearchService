
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
    const data = req.body.flightPayload;
    return { flightId, data };
};


module.exports = {
    getCreateFlightData,
    getUpdateFlightData
}