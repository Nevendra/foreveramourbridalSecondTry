const express = require('express');
const { createUser } = require('../models/users');
const { authenticate } = require('../lib/auth');
// const { functions go here } = require('../models/events');
// const { functions go here } = require('../models/update');

const usersRouter  = express.Router();

usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/about');
});

module.exports = usersRouter;
