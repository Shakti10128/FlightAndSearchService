const {CityService} = require("../services/index");

const cityService = new CityService();

const create = async(req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success:true,
            message:"City created successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            message:"Failded to created city",
            err: error
        })
    }
}

const destroy = async(req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message:"City deleted successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:true,
            message:"Not able to delete city",
            err:error
        })
    }
}


const update = async(req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message:"City updated successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:true,
            message:"Not able to update city",
            err:error
        })
    }
}

// GET -> 'city/:id'
const get = async(req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message:"City fetched successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:true,
            message:"Not able to get city",
            err:error
        })
    }
}

const getAllCities = async(req,res)=>{
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success:true,
            message:"All cities fetched successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success:true,
            message:"Not able to fetched all city",
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAllCities
}