const mongoose = require('mongoose');
require('./init');


const goalsSchema = mongoose.Schema({
	retroNumber: String,
	retroGoals: [{
		description: String,
		done: Boolean
	}]
});

const Goal = mongoose.model('Goal', goalsSchema);

module.exports = Goal;
