// Initializing mongoose here so dont have to continually write
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
mongoose.Promise = Promise;

module.exports = mongoose;