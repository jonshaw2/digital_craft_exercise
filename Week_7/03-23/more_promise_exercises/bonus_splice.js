require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');
var request = require('request-promise');
var buffer3=[];
var finalBuffer=[];


splice(['file-1.txt', 'file-2.txt', 'file-3.txt'], 'output.txt')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });


// splice2('file-1.txt', 'file-2.txt', 'output.txt')
//   .then(function() {
//     console.log('It worked.');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

function splice2(file1, file2, output){
  return fs.readFile(file1)
  .then(function(buffer1){
    return [buffer1, fs.readFile(file2)];
  })

  .spread(function(buffer1, buffer2){

    buffer1 = (buffer1.toString().split("\n"));
    buffer2 = (buffer2.toString().split("\n"));

    for (i=0;i<buffer1.length;i++){
      buffer3.push(buffer1[i]);
      buffer3.push(buffer2[i]);

    }
    buffer3 = buffer3.join("\n");

    console.log(buffer3);
    fs.writeFile(output, buffer3);
  });
}

function splice(arrayFile, output){
  return Promise.all(arrayFile.map(function(reading){
    return fs.readFile(reading);
  }))
    .then(function(buffer){
      console.log(buffer.length);
      for (i=0; i<buffer.length;i++){
      buffer[i] = (buffer[i].toString().split("\n"));

      }
      for (i=0; i<buffer.length;i++){
        for (j=0;j<buffer.length;j++){
          finalBuffer.push(buffer[j][i]);
        }
      }
      console.log(finalBuffer);
      finalBuffer = finalBuffer.join("\n");
      console.log(finalBuffer);
      fs.writeFile(output, finalBuffer);
    });
}
