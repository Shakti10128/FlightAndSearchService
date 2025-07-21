const {FlightRepository,AirplaneRepostory} = require("../repositroy/index");
const {validateDateAndTimeOfFlight} = require("../utils/helper");
const AppError = require("../utils/error-handler")
const {StatusCodes} = require("http-status-codes");

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