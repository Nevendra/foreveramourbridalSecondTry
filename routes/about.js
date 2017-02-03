const aboutRouter = require('express').Router();

aboutRouter.get('/', (req, res) => {
  res.render('About/about.ejs', {
  });
});
module.exports = aboutRouter;
