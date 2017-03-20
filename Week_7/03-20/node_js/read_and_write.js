var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a filename: ', function(inputFile){
  rl.question('Enter output filename: ',function(outputFile){
    fs.readFile(inputFile, function(err, buffer){
      if (err) {
        console.log(err.message);
        return;
      }
      var contents = buffer.toString().toUpperCase();
      console.log('writing');

      fs.writeFile(outputFile, contents,function(err,buffer){
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
