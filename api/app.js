var express = require("express");
var serviceLayer = require("./services/hotelsServices.js");
var config = require('./config/config.js').get(process.env.NODE_ENV);
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var apiRoutes = express.Router();
apiRoutes.route("/hotels").get(serviceLayer.getAllHotels);
apiRoutes.route("/hotels/:nombre").get(serviceLayer.getHotelsByName);
apiRoutes.route("/hotels/estrellas").post(serviceLayer.getHotelsByRating);

app.use('/api', apiRoutes);
app.listen(config.port);
