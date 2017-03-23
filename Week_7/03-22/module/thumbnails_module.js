var fs = require('fs');
var gm = require('gm');
var async = require('async');

function resizeImage(filename, callback) {
  gm(filename)
    .resize(240, 240)
    .write(filename, callback);
}

function readDirectory(url, callback){
  fs.readdir(url, function(err, files) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('before', files);
    files = files.map(function(filename) {
      return 'images/' + filename;
    });
    console.log('after', files);
    async.each(files, resizeImage, function(err) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('It worked.');
    });
  });
}

exports.readDirectory = readDirectory;
