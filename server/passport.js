const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const passport = require("passport")
const UserModel = require("./models/Users.model");

const GOOGLE_CLIENT_ID = `1085065976799-o8rd9js38qgq24dmidbnio8ludb2qh9n.apps.googleusercontent.com`;
const GOOGLE_CLIENT_SECRET = `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`;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
       done(null, profile);
      console.log(profile)
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
