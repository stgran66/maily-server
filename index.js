const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('dotenv').config({
  path: `.env${('.' && process.env.NODE_ENV) || ''}`,
});
require('./models/User');
require('./services/passport');

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT);
