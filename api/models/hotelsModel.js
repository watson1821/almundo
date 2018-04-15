var fs = require("fs");

function getHotelsData() {
    return fs.readFileSync("./data/data.json");
}

module.exports.getHotelsData = getHotelsData;
