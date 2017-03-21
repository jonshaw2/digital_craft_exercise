var async = require('async');
var fs = require('fs');
var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

async.each(filenames,transform,function(err){
  console.log(err);
});

function transform(filenames, callback){
  fs.writeFile(filenames, "hello, world!", function(err){
    if (err){
      callback(err);
    }
  });
}
