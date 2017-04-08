var ctx;
$(document).ready(function() {
  console.log('in the frontend');
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  var drawcondition=false;
  var previousx = 0;
  var previousy = 0;
  var radius = 10;
  var socket = io();

  var red=0;
  var green=0;
  var blue=0;



  var username = prompt('What is your screen name?');
  socket.emit('join', username);


  $("#custom").spectrum({
      change: function(color) {
        color.toHexString();
      }
  });

  $("#submit_button").click(function(){
    var test = $("#custom").spectrum("get");
    console.log('in submit button');
    console.log(test);
    red = Math.floor(test._r);
    blue=Math.floor(test._b);
    green=Math.floor(test._g);
  });

  $("#submit_thickness").click(function(){
    radius = $("#text_thickness").val();
    console.log(radius);
  });

  $("#eraser").click(function() {
    red = 255;
    blue=255;
    green=255;
  });


  // $("#flat").spectrum({
  //   flat: true,
  //   showInput: true
  // });
  //
  // $("#flatClearable").spectrum({
  //     flat: true,
  //     showInput: true,
  //     allowEmpty:true
  // });


  $('canvas').on('mousedown', function eventHandler(event){
    drawcondition = true;
    socket.emit('join', username);


    // do stuff in reponse to mouse being clicked down


  });

  $('canvas').on('mousemove', function eventHandler(event){

    if (drawcondition === true){
      socket.emit('draw', event.clientX, event.clientY, previousx, previousy, red, green, blue, radius);



    }
    previousx = event.clientX;
    previousy = event.clientY;

  });

  $('canvas').on('mouseup', function eventHandler(event){
    drawcondition = false;

    socket.emit('discon', username);

    // do stuff in reponse to mouse being clicked down
    // console.log(event.clientX);
    // console.log(event.clientY);
  });


  socket.on('canvas_draw', function(current_x, current_y, previous_x, previous_y, red_red, green_green, blue_blue, radius_radius){
    current_y = current_y - 100;
    current_x = current_x -10;
    previous_y = previous_y - 100;
    previous_x = previous_x - 10;

    console.log(radius_radius);
    ctx.lineWidth = radius_radius * 2;
    ctx.beginPath();
    ctx.moveTo(previous_x, previous_y);
    ctx.strokeStyle='rgb(' + red_red + ',' + green_green + ',' + blue_blue + ')';
    console.log(ctx.strokeStyle);
    ctx.lineTo(current_x, current_y);
    ctx.closePath();
    ctx.stroke();
    // do stuff in reponse to mouse being clicked down
    ctx.beginPath();

    ctx.fillStyle='rgb(' + red_red + ',' + green_green + ',' + blue_blue + ')';
    ctx.ellipse(current_x, current_y, radius_radius, radius_radius, 0, 0, Math.PI*2);
    ctx.fill();
});

  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

});
