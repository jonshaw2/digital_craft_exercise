var request = require('request-promise');
var fs = require('fs-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('It worked');
//   });
// });

request.get(url)
  .then(function(html){
  return fs.writeFile(filename, html);
  })

  .then(function(){
    console.log('it worked');
  })
  .catch(function(err){
    console.log(err.message);
    return;
  });
