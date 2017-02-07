const indexRouter = require('express').Router();

indexRouter.get('/', (req, res) => {
  res.render('Index/index.ejs', {
  });
});
module.exports = indexRouter;
