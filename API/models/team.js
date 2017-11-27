const mongoose = require('mongoose');
require('./init');

const retroSchema = [{
	"number": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Retro'
	}
}];

const goalsSchema = [{
	"todo": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Goal'
	}
}];

const teamSchema = mongoose.Schema({
	teamName: String,
	retro: retroSchema,
	goals: goalsSchema
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
