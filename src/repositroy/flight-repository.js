const {Flights} = require("../models/index");
const {Op, where} = require("sequelize");


class FlightRepository{

    // private method
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId) {
            // where arrivalAirportId = data.arrivalAirportId
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.depatureAirportId) {
            // where departureAirportId = data.depatureAirportId
            filter.depatureAirportId = data.depatureAirportId;
        }
        let priceFitler = [];
        if(data.minPrice) {
            // price >= minPrice
            priceFitler.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice) {
            // price <= maxPrice
            priceFitler.push({price:{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter,({[Op.and]:priceFitler}));
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Error while creating the flight in the flight repository layer");
            throw {error}
        }
    }

    async getFlight(id) {
        try {
            const flight = await Flights.findByFk(id);
            return flight;
        } catch (error) {
            console.log("Error while getting the flight data in the flight repository layer");
            throw {error}
        }
    }

    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where:filterObject
            });
            return flights;
        } catch (error) {
            console.log("Error while getting all the flight in the flight repository layer");
            throw {error}
        }
    }
};

module.exports = FlightRepository;