const {CityRepository} = require("../repositroy/index");


class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data) { // {name:"New Delhi"}
        try {
            const response = await this.cityRepository.createCity(data);
            return response;
        } catch (error) {
            console.log("Error while creating the city in cityService layer");
            throw {error};
        }
    };

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Error while deleting the city in cityService layer");
            throw {error};
        }
    };

    async updateCity(cityId,data){
        try {
            const response = await this.cityRepository.updateCity(cityId,data);
            return response;
        } catch (error) {
            console.log("Error while updating the city in cityService layer");
            throw {error};
        }
    };

    async getCity(cityId){
        try {
            const response = await this.cityRepository.getCity(cityId);
            return response;
        } catch (error) {
            console.log("Error while geting the city in cityService layer");
            throw {error};
        }
    }

    async getAllCities(filter){
        try {
            const response = await this.cityRepository.getAllCities(filter);
            return response;
        } catch (error) {
            console.log("Error while geting all the city in cityService layer");
            throw {error};
        }
    }
}

module.exports = CityService;