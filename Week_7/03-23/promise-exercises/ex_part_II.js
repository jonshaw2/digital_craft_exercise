var request = require('request-promise');
var fs = require('fs-promise');
var filename = "test.txt";

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];


var links = urls.map(function(requested){
  return request.get(requested);
});

console.log(links);

Promise.all(urls.map(function(requested){
  return request.get(requested);
}))
  .then(function(html){
    console.log('it worked');
    return fs.writeFile(filename, html);
  })
  .catch(function(err){

    console.log('error message:'+err.message);
    return;
  });
