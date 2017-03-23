var request = require('request-promise');
var fs = require('fs-promise');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';


saveWebPage(url, filename);

function saveWebPage(url, filename){
  return request.get(url)
    .then(function(html){
      return fs.writeFile(filename, html);
    })

    .catch(function(err){
      console.log('the error is:'+err.message);
      return;
    });
}
