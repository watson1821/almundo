var jsonQuery = require("json-query");
var parser = require('json-parser');
var hotelModel = require("../models/hotelsModel.js");

var dataHoteles = hotelModel.getHotelsData;

function getAllHotels() {
    return JSON.parse(dataHoteles().toString());;
}

function getHotelsByName(hotelName) {
    var result = jsonQuery("[name=" + hotelName + "]", {
        data: JSON.parse(dataHoteles().toString())
    }).value;

    return result != null ? [result] : [];
}

function getHotelsByRating(arrayRating) {
    var condicion = "";
    for (var i = 0; i < arrayRating.length; i++) {
        if (i == arrayRating.length - 1) {
            condicion += "stars=" + arrayRating[i];
        } else {
            condicion += "stars=" + arrayRating[i] + "|";
        }
    }

    return jsonQuery("[*" + condicion + "]", {
        data: JSON.parse(dataHoteles().toString())
    }).value;
}

module.exports.getAllHotels = getAllHotels;
module.exports.getHotelsByName = getHotelsByName;
module.exports.getHotelsByRating = getHotelsByRating;
