const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/User');
require('./services/passport');

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT);
