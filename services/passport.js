import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import { useKeys } from '../config/keys.js';

const { googleKeys } = useKeys();

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new Strategy(
    {
      clientID: googleKeys.client_id,
      clientSecret: googleKeys.client_secret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
