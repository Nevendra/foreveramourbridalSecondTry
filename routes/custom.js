const customRouter = require('express').Router();

customRouter.get('/', (req, res) => {
  res.render('Custom/custom.ejs', {
  });
});
module.exports = customRouter;
