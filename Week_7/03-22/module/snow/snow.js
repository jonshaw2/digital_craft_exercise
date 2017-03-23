
function letItSnow(img,appendClass,snowCount, heightlimit){
  this.heightlimit = heightlimit;
  this.sheight = [];
  for (var j=0;j<snowCount;j++){
    this.sheight.push(0);
    this.swidth.push(0);
    this.snowCount.push(0);
    this.speed.push(0);
  }

  for(var i=0; i<this.sheight.length;i++){
    this.swidth[i]=Math.floor(Math.random()*window.innerWidth-200)+100;
    this.speed[i]=Math.floor(Math.random()*2)+1;
    $(appendClass).append('<img class="snow snow'+i+'" src='+img+'>');

    $(".snow"+i).css('position','absolute');
    $(".snow"+i).css('opacity','.2');
    $(".snow"+i).css('width','25px');
    $(".snow"+i).css('margin',this.sheight[i] +' 0 0 -9000px');

    this.snowCount[i] = i;
  }

  var counter = 0;
  callingSnow();

  function callingSnow(){
    setTimeout(function(){

      this.snowCount[counter] = counter;
      snowing(this.sheight[counter], this.swidth[counter], this.snowCount[counter], this.speed[counter], this.heightlimit);

      if (counter <= 10){
        callingSnow();
        counter += 1;
      }
      else{
      }
    }, 1000*counter+1);

  }
  function snowing(sheight, swidth, snowCount, speed, limit){
    var heightlimit = window.innerHeight-100;
    if (heightlimit > limit){
      heightlimit = limit;
    }

    if (sheight <= heightlimit){

      sheight += speed;


      $(".snow"+snowCount).css('margin',sheight + 'px 0 0 '+swidth+'px');
      setTimeout(function(){
        snowing(sheight, swidth, snowCount, speed);
      }, 10);
    }
    else{
      sheight = 0;
      swidth = Math.floor(Math.random()*window.innerWidth-200)+100;
      speed = Math.floor(Math.random()*2)+1;
      snowing(sheight, swidth, snowCount, speed, limit);


    }

  }
}
exports.letItSnow = letItSnow;
