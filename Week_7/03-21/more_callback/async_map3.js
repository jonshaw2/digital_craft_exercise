var async = require('async');
var fs = require('fs');
var dir2read = 'images/';
var clog = console.log;
var gm = require('gm');
var request = require('request');




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


function downloadAndCreateThumbnail(url, files, thumbnailFilename, callback){
  var requestOptions = {url: url,
  encoding: null};


      gm(url)
        .resize(240, 240)
        .write("mini_"+thumbnailFilename, function(err){
          if (err) {
            callback(err);
          }
          console.log('worked!');
        });



}
