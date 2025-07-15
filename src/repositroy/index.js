
// returning an global object which contains all the repostories,
// instead of accuring all the repo one-by-one use only 1 import statement
module.exports = {
    CityRepository: require("../repositroy/city-repository")
}