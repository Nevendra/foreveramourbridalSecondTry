'use strict'
require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const app         = express();
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const customRouter = require('./routes/custom');
const contactRouter = require('./routes/contact');
const apptRouter = require('./routes/appointment');
const collectionRouter = require('./routes/collection');

const PORT    = process.argv[2] || process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/custom', customRouter);
app.use('/contact', contactRouter);
app.use('/appointment', apptRouter);
app.use('/collection', collectionRouter);


app.get('/venus', (req, res) => {
  res.render('Collection/venus.ejs', {
  });
});

app.get('/additionalDesigner', (req, res) => {
  res.render('Collection/additionalDesigners.ejs', {
  });
});

app.get('/eddiek', (req, res) => {
  res.render('Collection/eddiek.ejs', {
  });
});

app.get('/judeJowlison', (req, res) => {
  res.render('Collection/judeJowlison.ejs', {
  });
});

app.get('/justinAlexander', (req, res) => {
  res.render('Collection/justinAlexander.ejs', {
  });
});

app.get('/nicolespose', (req, res) => {
  res.render('Collection/nicolespose.ejs', {
  });
});

app.get('/rosaClara', (req, res) => {
  res.render('Collection/rosaClara.ejs', {
  });
});

app.listen(PORT, () => console.log('Server running on port', PORT));
