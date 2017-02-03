'use strict'
require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const app         = express();
const aboutRouter = require('./routes/about');

const PORT    = process.argv[2] || process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/about', aboutRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
