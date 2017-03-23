var cheerio = require('cheerio');
var request = require('request');

request({
    method: 'GET',
    url: 'https://github.com/showcases'
}, function(err, response, body) {
    if (err) return console.error(err);
    console.log(body);
});
