var fs = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'input.txt';

// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });

fs.readFile(filename)
  .then(function(buffer){
    var content = buffer.toString();
    return content;
  })
    .then(function(something){
      fs.writeFile(outputFilename, something.toUpperCase());
    })

    .catch(function(err){
      console.log('something wrong.');
      console.log('Because: ', err.message);
    })


  .catch(function(err){
    console.log('something went wrong.');
    console.log('Because: ', err.message);
  });
