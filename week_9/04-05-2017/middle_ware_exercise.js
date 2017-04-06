const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

var Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
require('any-promise/register/bluebird');
var request = require('request-promise');
var fs = require('fs-promise');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));

app.use(function myMiddleware(request, response, next){
  var contents = request.method + ' ' + request.path;
  fs.appendFile('logfile.txt', contents)
    .then(function(){
      next();
    })
    .catch(next);
});
app.use(session({
  secret: 'test',
  cookie:{
    maxAge: 60000000
  }
}));

app.get('/greet', function(request, response){
  response.render('greet.hbs', {
    name: request.session.name
  });
});

app.get('/ask', function(request, response){
  response.render('ask.hbs', {
  });
});

app.post('/submit_name', function(request, response){
  console.log('in post');
  var name = request.body.name;
  request.session.name = name;
  console.log('aaa');
  response.redirect('/greet');
});


app.listen(3000, function(){
  console.log('test2');
});
