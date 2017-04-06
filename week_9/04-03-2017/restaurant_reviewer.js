var Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
require('any-promise/register/bluebird');

const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
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

app.use(session({
  secret: 'test',
  cookie:{
    maxAge: 6000000000
  }
}));

app.use(function(request, response, next) {
  response.locals.session = request.session;
  next();
});

app.get('/login', function(request, response){
  response.render('login.hbs');
});

app.post('/submit_login', function(request, response, next){
  var username = request.body.username;
  var password = request.body.password;
  db.one("select reviewer.password from reviewer where reviewer.id = $1", request.body.username)
    .then(function(check_password){
      console.log(check_password);
      if (check_password.password === password){
        request.session.loggedInUser = username;

        response.redirect('/');
      }else{
        response.redirect('/login');
      }

    })
    .catch(next);
});

app.use(function authentication(request, response, next){
  if (request.session.loggedInUser){
    next();
  }else{
  response.send('you must login! <a href="/login">Login</a>');
  }
});


app.get('/',function (req, response){
  response.render('index.hbs',{

  });
});

app.get('/submit', function(req, response, next) {
  // console.log(req.query);
  // response.send(req.query);
    var rest_name = req.query.restaurant_search;

    // db.any(`select * from restaurant where restaurant.name ilike '%${rest_name}%' `)
    db.any("select * from restaurant where restaurant.name ilike $1","%"+rest_name+"%")
      .then(function(search_results){
        console.log(search_results);
        response.render('search_results.hbs',{
          search_results: search_results
        });
      })
      .catch(next);
});

app.get('/restaurant/:id', function(req,response, next){
  let id = req.params.id;
  db.one(`select * from restaurant where restaurant.id = ${id}`)
    .then(function(restaurant_info){
      // console.log("restaurant: ", JSON.stringify(restaurant_info));
      // response.render('restaurant.hbs',{
      //   restaurant_info : restaurant_info
      // });
      return [ restaurant_info, db.any(`select reviewer.name, review.title, review.stars, review.review
              from
              review
              left outer join
              reviewer on reviewer.id = review.reviewer_id
              left outer join
              restaurant on restaurant.id = review.restaurant_id
              where restaurant.id = ${id} `)];
    })
    .spread(function(restaurant_info, reviews){
      // console.log("fasdfasd",JSON.stringify(restaurant_info),JSON.stringify(reviews));
      response.render('restaurant.hbs',{
        restaurant_info: restaurant_info,
        restaurant_critic: reviews
      });
    })
    .catch(next);
});

//don't write default in uppercase//
app.post('/submit_review/:id', function(req, response, next){
    let restaurant_title = req.body.review_title;
    let restaurant_stars = req.body.review_stars;
    let restaurant_review = req.body.review_review;
    let restaurant_id = req.params.id;
    db.none(`insert into review values (default, '${req.session.loggedInUser}',${restaurant_stars},'${restaurant_title}','${restaurant_review}',${restaurant_id})`)
      .then(function(){
        response.redirect(`/restaurant/${restaurant_id}`);
      })
      .catch(next);


});
app.listen(3000, function(){
  console.log('test');
});
