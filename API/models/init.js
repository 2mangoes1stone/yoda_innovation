// Initializing mongoose here so dont have to continually write
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, { useMongoClient: true })
mongoose.Promise = Promise;

module.exports = mongoose;