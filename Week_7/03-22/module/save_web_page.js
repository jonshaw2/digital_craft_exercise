var request = require('request');
var fs = require('fs');

function save_a_page(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}
exports.save_a_page = save_a_page;
