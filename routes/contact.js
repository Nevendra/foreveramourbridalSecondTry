const contactRouter = require('express').Router();

contactRouter.get('/', (req, res) => {
  res.render('Contact/contact.ejs', {
  });
});
module.exports = contactRouter;
