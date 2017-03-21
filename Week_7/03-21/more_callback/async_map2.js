var async = require('async');
var fs = require('fs');
var dir2read = 'images/';
var clog = console.log;


var AsyncArrayProcessor = function (inArray, inEntryProcessingFunction) {
   var elemNum = 0;
   var arrLen = inArray.length;
   var ArrayIterator = function(){
      inEntryProcessingFunction(inArray[elemNum]);
      elemNum++;
      if (elemNum < arrLen) process.nextTick(ArrayIterator);
   };
   if (elemNum < arrLen) process.nextTick(ArrayIterator);
};

fs.readdir(dir2read, function(err, flist){
   if (err) {
      clog('Error reading directory ' + dir2read);
      clog(err);
      return;
   }
   var ProcessDirectoryEntry = function(entry){
      // This may be as complex as you may fit in a single event loop
      clog('Processing a directory entry: ' + entry);
   };
   AsyncArrayProcessor(flist, ProcessDirectoryEntry);
   clog('.readdir() callback is finished, event loop continues...');
});
