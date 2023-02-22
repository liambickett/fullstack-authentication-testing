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
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then((user) => {
        if (user) {
          console.log(user);
        } else {
          new User({
            googleID: profile.id,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
