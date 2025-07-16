const {FlightService} = require("../services/index");

const flightService = new FlightService();


const create = async(req,res)=>{
    try {
        const response = await flightService.createFlight(req.body);
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