const {FlightService} = require("../services/index");

const flightService = new FlightService();


const create = async(req,res)=>{
    try {
        const flightData = { // required fields to create the flight
            flightNumber:            req.body.flightNumber,
            airplaneId:              req.body.airplaneId,
            arrivalAirportId:        req.body.arrivalAirportId,
            departureAirportId:      req.body.departureAirportId,
            arrivalTime:             req.body.arrivalTime,
            departureTime:           req.body.departureTime,
            price:                   req.body.price
        }
        const response = await flightService.createFlight(flightData);
        return res.status(201).json({
            data: response,
            success:true,
            message:"flight created successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"Failded to created flight",
            err: error
        })
    }
}

const getAllFlight = async(req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data: response,
            success:true,
            message:"all flight data fetched successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"Failded to fetched all flight data",
            err: error
        })
    }
}

module.exports = {
    create,
    getAllFlight
}