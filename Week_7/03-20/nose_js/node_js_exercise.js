var fs = require('fs');

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
    var contents = buffer.toString();
    console.log(contents);

  });
  rl.close();
});
