$(document).ready(function(){

  $.fn.reverse = function() {
    this.click(function(){
      var j = 0;
      var x = 1;
      var y = 1;
      var bcolor = ['red','orange','yellow','green','blue','purple','brown'];
      var xdistance = 5;
      var ydistance = 1;
      var i = 0;
      function makeAMove() {
        setTimeout(function() {
          if (i < 9999) {
            var number = Math.floor(Math.random()*7);
            $('button').css('background-color',bcolor[number]);
            $('button').css('margin-left',x+'px');
            $('button').css('margin-top',y+'px');

            x+= xdistance;
            y+= ydistance;
            i += 1;

            if(x >= 600 || x <= 0){
              xdistance *= -1;
            }
            if(y >= 300 || y <= 0){
              ydistance *= -1;
            }

            makeAMove();
          } else {
            console.log('Game over.');
          }
        }, 10);
      }
      makeAMove();

    });
  };
  $('button').reverse();



});
