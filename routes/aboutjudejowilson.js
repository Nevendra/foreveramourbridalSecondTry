const aboutJudeJowilsonRouter = require('express').Router();

aboutJudeJowilsonRouter.get('/', (req, res) => {
  res.render('AboutJudeJowilson/aboutJudeJowilson.ejs', {
  });
});
module.exports = aboutJudeJowilsonRouter;