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
const aboutJudeJowilsonRouter = require('./routes/aboutJudeJowilson');

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
app.use('/aboutJudeJowilson', aboutJudeJowilsonRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
