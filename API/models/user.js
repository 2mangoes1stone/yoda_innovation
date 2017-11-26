const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose')
require('./init')
const userSchema = mongoose.Schema({})
// Add email, password hash, salt etc to User schema
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true, // Emails are case insensitive
  sessions: false // Using jwt not seesions
});

const User = mongoose.model('User', userSchema)

module.exports = User