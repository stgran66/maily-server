const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

const findOrCreateUser = async (profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });

  if (existingUser) {
    return done(null, existingUser);
  }

  const user = await new User({ googleId: profile.id }).save();
  done(null, user);
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      await findOrCreateUser(profile, done);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      await findOrCreateUser(profile, done);
    }
  )
);
