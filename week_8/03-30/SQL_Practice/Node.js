var pgp = require('pg-promise')();

var connect_vars = require('/users/mac/private/config.js');

var db = pgp({
  host: connect_vars.host,
  database: connect_vars.database,
  user: connect_vars.user,
  password: connect_vars.password
});

db.any("select * from album")
  .then(function(result) {
    console.log(result);
    pgp.end();
  })
  .catch(function(err) {
    console.log(err.message);
  });
