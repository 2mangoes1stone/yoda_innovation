// Initializing mongoose here so dont have to continually write
const mongoose = require('mongoose')

// mongoose.connection.on("open", function(ref) {
//   console.log("Connected to mongo server.");
//   return start_up();
// });

// mongoose.connection.on("error", function(err) {
//   console.log("Could not connect to mongo server!");
//   return console.log(err);
// });

mongoose.connect(process.env.DATABASE, { useMongoClient: true })
mongoose.Promise = Promise;

module.exports = mongoose;