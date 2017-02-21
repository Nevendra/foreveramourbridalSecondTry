const loginRouter = require('express').Router();

loginRouter.get('/', (req, res) => {
  res.render('Login/login.ejs', {
  });
});

module.exports = loginRouter;
