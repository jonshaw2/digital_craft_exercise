var Promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: Promise
});
var prompt = require('prompt-promise');
var connect_vars = require('/users/mac/private/music_db_config.js');

var db = pgp({
  host: connect_vars.host,
  port: connect_vars.port,
  user: connect_vars.user,
  password: connect_vars.password,
  database: connect_vars.database
});

// db.any("select * from album")
//   .then(function(result) {
//     console.log(result);
//     pgp.end();
//   })
//   .catch(function(err){
//     console.log(err.message);
//   });

prompt('Album name? ')
  .then(function(album_name) {
      return [album_name,prompt('Album year? ')];
  })
  .spread(function(album_name,album_year){
    return [album_name, album_year,prompt('Artist ID? ')];
  })
  .spread(function(album_name, album_year,artist_id){
    db.none('insert into album values (default, '+album_name+', '+album_year+', '+artist_id+')');
  })
  .catch(function(err){
    console.log(err.message);
  });
