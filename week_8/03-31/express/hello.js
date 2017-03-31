var express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/',function (req, res){
  res.send('Hello World!');
});

app.get('/cats',function (req, res){
  res.send('Cats');
});

app.get('/dogs',function (req, res){
  res.send('Woof!');
});

app.get('/cats_and_dogs',function (req, res){
  res.send('Living together');
});

// parameter
// app.get('/greet/:name',function (req, res){
//   var name = req.params.name;
//   res.send('Hello ' + name + "!");
// });

// query parameter
// app.get('/greet/:name', function(req,res){
//   var name = req.params.name;
//   var age = 2017 - req.query.age;
//   res.send(name+' were born in '+ (age));
// });

app.get('/greet/:name',function (req, res){
  var name = req.params.name;
  var year = (2017-req.query.age);
  response.render('hello.hbs',{
    title: 'Hello',
    name: name,
    year: year
  });
});

app.listen(3000, function(){
  console.log('test');
});
