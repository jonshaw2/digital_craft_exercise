var async = require('async');
var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];
function doWeWant(filename, callback) {
  fs.access(filename, 'r', function(err){
    callback(null, !err);
  });
}

async.filter(filenames, doWeWant, function(err, validFiles){
  if (err){
    console.log(err.message);
    return;
  }
  else{
  console.log(validFiles);
  }

});
