'use strict'
require('dotenv').config({ silent: true });
const express          = require('express');
const logger           = require('morgan');
const path             = require('path');
const app              = express();
const methodOverride   = require('method-override');
const cookieParser     = require('cookie-parser');
const session          = require('express-session');
const indexRouter      = require('./routes/index');
const aboutRouter      = require('./routes/about');
const customRouter     = require('./routes/custom');
const contactRouter    = require('./routes/contact');
const apptRouter       = require('./routes/appointment');
const collectionRouter = require('./routes/collection');
const PORT             = process.argv[2] || process.env.port || 3000;
const aboutJudeJowilsonRouter = require('./routes/aboutJudeJowilson');
const managementRouter = require('./routes/management');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// This is middleware for method override
app.use(methodOverride('_method'));

// this reads cookies sent from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'foreveramour',
}));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/custom', customRouter);
app.use('/contact', contactRouter);
app.use('/appointment', apptRouter);
app.use('/collection', collectionRouter);
<<<<<<< HEAD
app.use('/management', managementRouter);

=======
app.use('/aboutJudeJowilson', aboutJudeJowilsonRouter);
>>>>>>> aa77f7b87597ab7262874cb10400ae018ca6903a

app.listen(PORT, () => console.log('Server running on port', PORT));
