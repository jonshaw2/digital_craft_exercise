var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a filename: ', function(fileName){
  fs.readFile(fileName, function(err, buffer){
    console.log(fileName);
    if (err) {
      console.log(err.message);
      return;
    }
    var contents = buffer.toString().toUpperCase();
    console.log(contents);

  });
  rl.close();
});

rl.question('Enter a domain name: ', function(domain) {
  dns.lookup(domain, function(err, ipAddress) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(domain + "'s IP address is " + ipAddress);
    rl.close();
  });


});
