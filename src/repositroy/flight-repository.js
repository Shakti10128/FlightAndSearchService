const {Flights} = require("../models/index");
const {Op, where} = require("sequelize");
const AppError = require("../utils/error-handler")
const {StatusCodes} = require("http-status-codes");
const CrudRepository = require("./crud-repository")


class FlightRepository extends CrudRepository{

    constructor(){
        super(Flights);
    }

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
        return await super.create(data);
    }
    
    async getFlightById(id) {
        console.log("repository ",id);
        return await super.get(id);
    }

    async getAllFlight(filter) {
        const filterObject = this.#createFilter(filter);
        const flights = await Flights.findAll({
            where:filterObject
        });
        return flights;
    }
};

module.exports = FlightRepository;