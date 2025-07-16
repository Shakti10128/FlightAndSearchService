const {Airplane} = require("../models/index");

class AirplaneRepostory{

    async getAirplane(id){
        try {
            // find the airplane via primary key
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Error while getting the airplane in airplane repository layer");
            throw {error}
        }
    }
};



module.exports = AirplaneRepostory;