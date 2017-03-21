var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');
var gm = require('gm').subClass({imageMagick: true});

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};

request (options, function(err, response, imageData){
  gm(options.url)
  .resize(240, 240)
  .write('thumbnail.png', function (err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('done');

  });


});
