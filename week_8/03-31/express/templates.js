var express = require('express');
var app = express();

app.set('view engine', 'hbs');


app.get('/animals', function(req, res){

  var animals = [
    { name: 'cats', favorite: true },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: false },
    { name: 'earth worms', favorite: false },
    { name: 'guinea pigs', favorite: true }
  ];
  res.render('animals.hbs', {
    animals: animals,
    title: 'hello'
  });
});



// input and compare with hello.hbs

// app.get('/greet/:name',function (req, res){
//   var name = req.params.name;
//   var year = (2017-req.query.age);
//   res.render('hello.hbs',{
//     title: 'Hello',
//     name: name,
//     year: year
//   });
// });

app.listen(3000, function(){
  console.log('test');
});
