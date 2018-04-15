var hotelController = require("../controllers/hotelsController");

var NO_DATA = 'no data';

function getAllHotels(req, res) {
	var hotels = hotelController.getAllHotels();
	if (hotels == null || hotels.length <= 0) {
		return res.status(404).send(NO_DATA);
	}
	return res.status(200).jsonp(hotels);
}

function getHotelsByName(req, res) {
	var hotels = hotelController.getHotelsByName(req.params.nombre);
	if (hotels == null || hotels.length <= 0) {
		return res.status(404).send(NO_DATA);
	}
	return res.status(200).jsonp(hotels);
}

function getHotelsByRating(req, res) {
	var hotels = hotelController.getHotelsByRating(req.body);
	if (hotels == null || hotels.length <= 0) {
		return res.status(404).send(NO_DATA);
	}
	return res.status(200).jsonp(hotels);
}

module.exports.getAllHotels = getAllHotels;
module.exports.getHotelsByName = getHotelsByName;
module.exports.getHotelsByRating = getHotelsByRating;
