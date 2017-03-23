var save_web_page = require('./save_web_page');


var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
save_web_page.save_a_page(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
