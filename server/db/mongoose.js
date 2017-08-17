let mongoose = require("mongoose");

mongoose.Promise = global.Promise;  //allows us to use promises

mongoose.connect("mongodb://localhost:27017/KGImageGallery",{useMongoClient: true}); //connects to the database called KGWeb


module.exports = { mongoose };