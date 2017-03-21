var request = require('request');
var fs = require('fs');


var filename = 'output.html';

function saveWebPage(url, filename, callback){
  request.get(url, function(err, response, html){
    fs.writeFile(filename, html, function(err){
      if (err){
        callback(err);
      }
      console.log('done');

    });
  });
}


saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
