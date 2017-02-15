const apptRouter = require('express').Router();

apptRouter.get('/', (req, res) => {
  res.render('Appointment/appointment.ejs', {
  });
});
module.exports = apptRouter;
