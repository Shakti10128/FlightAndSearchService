const CrudRepository = require("./crud-repository");
const {Airport} = require("../models/index");

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
    // if you have your own create method then override the parent method
    // same for all methods you can override the parents methods
}


module.exports = AirportRepository;