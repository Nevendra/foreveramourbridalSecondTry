'use strict'
// if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
require('dotenv').config({ silent: true });
const express          = require('express');
const logger           = require('morgan');
const path             = require('path');
const app              = express();
const bodyParser     = require('body-parser');
const methodOverride   = require('method-override');
const cookieParser     = require('cookie-parser');
const session          = require('express-session');
const indexRouter      = require('./routes/index');
const aboutRouter      = require('./routes/about');
const customRouter     = require('./routes/custom');
const contactRouter    = require('./routes/contact');
const apptRouter       = require('./routes/appointment');
const collectionRouter = require('./routes/collection');
const aboutJudeJowilsonRouter = require('./routes/aboutjudejowilson');
const loginRouter    = require('./routes/login');
const authRouter     = require('./routes/auth');
const usersRouter    = require('./routes/users');


const PORT             = process.argv[2] || process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded <- no clue what this means just yet
app.use(bodyParser.urlencoded({ extended: true }));

// Parses application/JSON
app.use(bodyParser.json());

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
app.use('/login', loginRouter);
app.use('/aboutJudeJowilson', aboutJudeJowilsonRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
