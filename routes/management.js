const express = require('express');
const { authenticate } = require('../lib/auth');

const managementRouter  = express.Router();

// const { functions go here } = require('../models/events');
// const { functions go here } = require('../models/update');

// managementRouter.put('/', (req, res) => {
//   res.json({
//   });
// });

// managementRouter.get('/', authenticate, getWelcomeBadge, getWikiBadge, getEduBadge, getGameBadge, getPlankBadge, getRossyBadge, getIlluminatiBadge, getFlashBadge, (req, res) => {
//   console.log(res.wiki);
//   res.render('profile/profile', { user: res.user.username, welcome: res.events, wiki: res.wiki, learn: res.learn, game: res.game, ed: res.ed, ross: res.ross, lumi: res.lumi, flash: res.flash });
// });
