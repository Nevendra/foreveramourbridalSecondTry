const collectionRouter = require('express').Router();

collectionRouter.get('/', (req, res) => {
  res.render('Collection/collection.ejs', {
  });
});

collectionRouter.get('/additionalDesigners', (req, res) => {
  res.render('Collection/additionalDesigners.ejs', {
  });
});

collectionRouter.get('/eddiek', (req, res) => {
  res.render('Collection/eddiek.ejs', {
  });
});

collectionRouter.get('/venus', (req, res) => {
  res.render('Collection/venus.ejs', {
  });
});

collectionRouter.get('/judeJowlison', (req, res) => {
  res.render('Collection/judeJowlison.ejs', {
  });
});

collectionRouter.get('/justinAlexander', (req, res) => {
  res.render('Collection/justinAlexander.ejs', {
  });
});

collectionRouter.get('/nicolespose', (req, res) => {
  res.render('Collection/nicolespose.ejs', {
  });
});

collectionRouter.get('/rosaClara', (req, res) => {
  res.render('Collection/rosaClara.ejs', {
  });
});


module.exports = collectionRouter;
