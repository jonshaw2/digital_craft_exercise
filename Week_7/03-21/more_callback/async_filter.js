var async = require('async');
var fs = require('fs');
var dir2read = 'images/';
var clog = console.log;
var gm = require('gm');
var request = require('request');

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




fs.readdir(dir2read, function(err, flist){
   if (err) {
      clog('Error reading directory ' + dir2read);
      clog(err);
      return;
   }
   var files = flist;

   async.each(files,traverseArray,function(err){
     console.log(err);
   });
});

function traverseArray(file){
  downloadAndCreateThumbnail(dir2read+file, file, file, function(err){
    console.log(err);

  });
}
