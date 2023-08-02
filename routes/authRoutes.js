import passport from 'passport';

export const authRoutes = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    console.log('logout request');
  });

  app.get('/api/auth_user', (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });
};
