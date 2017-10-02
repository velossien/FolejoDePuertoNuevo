let mongoose = require("mongoose");

mongoose.Promise = global.Promise;  //allows us to use promises

mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true}); //connects to the database called KGWeb

module.exports = { mongoose };