const managementRouter = require('express').Router();

managementRouter.get('/', (req, res) => {
  res.render('Management/management.ejs', {
  });
});

module.exports = managementRouter;
