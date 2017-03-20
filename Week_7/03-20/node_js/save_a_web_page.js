var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an URL: ', function(inputURL){
  rl.question('Enter output filename: ',function(outputFile){
    dns.lookup(inputURL, function(err, ipAddress) {
      if (err) {
        console.log(err.message);
        return;
      }

      fs.writeFile(outputFile, inputURL,function(err,buffer){
        if (err) {
          console.log(err.mesasge);
          return;
        }
        console.log("I'm done!");
        rl.close();
      });
    });
  });
});
