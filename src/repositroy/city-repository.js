const { where,Op } = require("sequelize");
const {City} = require("../models/index");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {
    
    constructor(){
         // pass the model that curr repo using so that it parent repo can also operate on the 
         //  same model
        super(City);
    }

    async createCity(data) { 
        await super.create(data); // calling parent create model to create the city
    };

    async deleteCity(cityId) {
        await super.destroy(cityId);
    };

    async updateCity(cityId,data){
        await super.update(cityId,data);
    };

    async getCity(cityId){
        // find the city by PrimaryKey as cityid is Primary Key
        const city = await super.get(cityId);
        return city ? city : null;
    }

    async getAllCities(filter){
        if(filter.name) {
            const cities = City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
            })
            return cities;
        }
        // find all cities if there is no filter
        const city = await City.findAll();
        return city;
    }
}

module.exports = CityRepository;