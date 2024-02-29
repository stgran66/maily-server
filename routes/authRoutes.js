const passport = require('passport');

const redirectToDashboard = (req, res) => {
  res.redirect('/surveys');
};

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    redirectToDashboard
  );

  app.get(
    '/auth/github',
    passport.authenticate('github', {
      scope: ['user:email'],
    })
  );

  app.get(
    '/auth/github/callback',
    passport.authenticate('github'),
    redirectToDashboard
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
