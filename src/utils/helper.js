

function validateDateAndTimeOfFlight(arrivalTime,departureTime){
    let time1 = new Date(arrivalTime);
    let time2 = new Date(departureTime);

    if(time1.getMonth() >= time2.getMonth() && time1.getDate() >= time2.getDate() && 
        time1.getTime() > time2.getTime()) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    validateDateAndTimeOfFlight
}