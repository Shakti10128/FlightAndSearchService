const {FlightRepository,AirplaneRepostory} = require("../repositroy/index");
const {validateDateAndTimeOfFlight} = require("../utils/helper");
const AppError = require("../utils/error-handler")
const {StatusCodes} = require("http-status-codes");
const successResponse = require("../utils/successResponse");

class FlightService{

    constructor(){
        this.airplaneRepostory = new AirplaneRepostory();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            // vliadation for flight arrivalTime & departureTime
            if(!validateDateAndTimeOfFlight(data.arrivalTime,data.departureTime)) {
                throw new AppError("arrivalTime and departureTime are invalid",StatusCodes.BAD_REQUEST)
            } 

            // get the airplane details, like we concern about capacity for a flight right now
            const airplane = await this.airplaneRepostory.getAirplane(data.airplaneId);
            
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});

            return flight;
        } catch (error) {
            throw error;
        }
    }

    async getFlightById(id){
        try {
            const flight = await this.flightRepository.getFlightById(id);
            if(!flight) {
                throw new AppError("Invalid flight id",StatusCodes.BAD_REQUEST);
            }
            return flight;
        } catch (error) {
            throw error;
        }
    }

    async updateFlight(flightId,data){
        try {
            const response = await this.flightRepository.update(flightId,data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAllFlightData(data){
        try {
            const flight = await this.flightRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            throw error;
        }
    }
}

/**  flight Data
 * {
 *    flightNumber
 *    airplaneId
 *    departureAirportId
 *    arrivalAirportId
 *    arrivalTime
 *    departureTime
 *    price
 *    totalSeats -> airplane
 * }
 */

module.exports = FlightService;