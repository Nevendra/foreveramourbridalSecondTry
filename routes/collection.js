const collectionRouter = require('express').Router();

collectionRouter.get('/', (req, res) => {
  res.render('Collection/collection.ejs', {
  });
});
module.exports = collectionRouter;
