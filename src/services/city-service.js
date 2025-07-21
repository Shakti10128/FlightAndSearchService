const {CityRepository} = require("../repositroy/index");
const AppError = require("../utils/error-handler");
const {StatusCodes} = require("http-status-codes")

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data) { // {name:"New Delhi"}
        try {
            const response = await this.cityRepository.createCity(data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    async deleteCity(cityId) {
        try {
            await this.getCity(cityId); // if city present won't throw any else

            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            throw error;
        }
    };

    async updateCity(cityId,data){
        try {
            await this.getCity(cityId); // if city present won't throw any else

            const response = await this.cityRepository.updateCity(cityId,data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            if(!city) {
                console.log("city not present")
                throw new AppError("Invalid cityId", StatusCodes.BAD_REQUEST);
            }
            return city;
        } catch (error) {
            throw error;
        }
    }

    async getAllCities(filter){
        try {
            const response = await this.cityRepository.getAllCities(filter);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CityService;