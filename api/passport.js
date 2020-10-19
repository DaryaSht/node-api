const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../database/models/user/user');

passport.use(new LocalStrategy({
  usernameField: 'email',
}, (email, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
    return done(null, user);
  });
}));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});