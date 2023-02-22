import express from 'express';

import { useKeys } from './config/keys.js';

import { authRoutes } from './routes/authRoutes.js';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';

import './models/User.js';
import './services/passport.js';

const { mongoURI, cookieKey } = useKeys();

//////// Mongoose Connect /////////
mongoose.connect(mongoURI);

//////// Express App /////////
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//////// Routing /////////
authRoutes(app);

//listening settings
const PORT = process.env.PORT;

app.listen(PORT || 5000);
