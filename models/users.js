const bcrypt       = require('bcryptjs');
const db           = require('../lib/db.js');


function createUser(req, res, next) {
  console.log(req.body);
  console.log('User Created')
  db.none(`INSERT INTO users (firstname, lastname, email, username, password) VALUES ($1, $2, $3, $4, $5)`, [req.body.user.firstname, req.body.user.lastname, req.body.user.email, req.body.user.username, req.body.user.password])
    .then(next())
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function findByUsername(username) {
  return db.one('SELECT * FROM users WHERE username = $1', [username]);
}


function findById(id) {
  return db.one('SELECT * FROM users WHERE id = $1', [id]);
}

module.exports = {
  createUser,
  findByUsername,
  findById
};
