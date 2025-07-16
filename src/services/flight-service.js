const {FlightRepository,AirplaneRepostory} = require("../repositroy/index");
const {validateDateAndTimeOfFlight} = require("../utils/helper");

class FlightService{

    constructor(){
        this.airplaneRepostory = new AirplaneRepostory();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            // vliadation for flight arrivalTime & departureTime
            if(!validateDateAndTimeOfFlight(data.arrivalTime,data.departureTime)) {
                throw {error: "arrivalTime and departureTime are invalid"};
            }
            const airplane = await this.airplaneRepostory.getAirplane(data.airplaneId);
            
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});

            return flight;
        } catch (error) {
            console.log("Error while creating the flight in the flight service layer");
            throw {error}
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