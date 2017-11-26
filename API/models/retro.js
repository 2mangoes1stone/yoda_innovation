const mongoose = require('mongoose');
require('./init');


const retroSchema = mongoose.Schema({
	number: Number,
	retroAction: [{
		description: String
	}]
});

const Retro = mongoose.model('Retro', retroSchema);

module.exports = Retro;
