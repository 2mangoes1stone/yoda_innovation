const passport = require('passport')
// requires the model with Passport-Local Mongoose plugged in
const User = require('../models/user');

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// Register new user
function registerMiddleware(req, res, next) {
  const user = new User({
    email: req.body.email
  })
  User.register(user, req.body.password, (error, user) => {
    // Error in registration
    if (error) {
      // middleware failed with this error
      next(error)
      return
    }
    // Add newly created user to the req
    req.user = user
    // middleware succeeded with no error
    next()
  })
}

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  register: registerMiddleware
}