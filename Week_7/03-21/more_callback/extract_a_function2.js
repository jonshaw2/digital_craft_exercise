var fs = require('fs');
var gm = require('gm');
var request = require('request');

function downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback){
  request(requestOptions, function(err, response, data){
    if (err){
      callback(err);
    }
    fs.writeFile(filename, data, function(err){
      if (err){
        callback(err);
      }

      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, function(err){
          if (err) {
            callback(err);
          }
          console.log('worked!');
        });


    });

  });
}



var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
var requestOptions = {
  url: url,
  encoding: null
};

downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
})
