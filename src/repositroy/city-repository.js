const { where,Op } = require("sequelize");
const {City} = require("../models/index");

class cityRepository {
    async createCity({name}) { // {name:"New Delhi"}
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Error while creating the city in cityRepository layer");
            throw {error};
        }
    };

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where:{
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Error while deleting the city in cityRepository layer");
            throw {error};
        }
    };

    async updateCity(cityId,data){
        try {
            // const city = await City.update(data,{
            //     where:{
            //         id: cityId
            //     },
            //     // now the updated data will be return also, but it supported in
            //     // PostgresSql only
            //     returning:true
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Error while updating the city in cityRepository layer");
            throw {error};
        }
    };

    async getCity(cityId){
        try {
            // find the city by PrimaryKey as cityid is Primary Key
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Error while geting the city in cityRepository layer");
            throw {error};
        }
    }
    async getAllCities(filter){
        try {
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
            // find the city by PrimaryKey as cityid is Primary Key
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("Error while geting the city in cityRepository layer");
            throw {error};
        }
    }
}

module.exports = cityRepository;