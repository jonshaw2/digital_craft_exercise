var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/index.html');
});
io.on('connection', function(socket){
  socket.on('join', function(screenName){
    console.log(screenName);
    socket.screenName = screenName;
    io.emit('chat message', socket.screenName + ' has connected');
  });
});

io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    io.emit('chat message',socket.screenName + ": "+msg);
  });

  socket.on('disconnect', function(){
  io.emit('chat message', socket.screenName+ 'a user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
