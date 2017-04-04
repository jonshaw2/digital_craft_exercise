const pgp = require('pg-promise')({
  promiseLib: Promise
});
require('any-promise/register/bluebird');
var Promise = require('bluebird');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const connect_vars = require('./config.js');
const db = pgp({
  host: connect_vars.host,
  database: connect_vars.database,
  user: connect_vars.user,
  password: connect_vars.password
});

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/',function (req, response){
  response.render('index.hbs',{

  });
});

app.get('/submit', function(req, response, next) {
  // console.log(req.query);
  // response.send(req.query);
    var rest_name = req.query.restaurant_search;

    db.any(`select * from restaurant where restaurant.name ilike '%${rest_name}%' `)
      .then(function(search_results){
        console.log(search_results);
        response.render('search_results.hbs',{
          search_results: search_results
        });
      })
      .catch(next);
});

app.get('/restaurant/:id', function(req,response, next){
  var id = req.params.id;
  db.one(`select * from restaurant where restaurant.id = ${id} `)
    .then(function(restaurant_info){
      console.log(restaurant_info);
      response.render('restaurant.hbs',{
        restaurant_info: restaurant_info
      });
    })
    .catch(next);
  db.any(`select reviewer.name, review.title, review.stars, review.review
          from
          review
          inner join
          reviewer on reviewer.id = review.reviewer_id
          inner join
          restaurant on restaurant.id = review.restaurant_id
          where restaurant.id = 1 `)
    .then(function(restaurant_critic){
      response.render('restaurant.hbs',{
        restaurant_critic: restaurant_critic
      })
    })
});

app.listen(3000, function(){
  console.log('test');
});
