const mongoose = require('mongoose');
require('./init');

const retroSchema = [{
	"number": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Retro'
	}
}];

const teamSchema = mongoose.Schema({
	teamName: String,
	retro: retroSchema
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
