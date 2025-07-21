

const getCreateCityData = (req)=>{
    const cityData = {
            "name":req.body.name
    };
    return cityData;
}

const getUpdateCityData = (req)=>{
    return getCreateCityData(req);
}

module.exports = {
    getCreateCityData,
    getUpdateCityData
}