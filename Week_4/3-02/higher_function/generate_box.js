box(5,4);
function box(width, height){
  var print_box = "";

  console.log(width);
  console.log(height);

  for (i=0; i<height; i++){
    if (i !== 0){
      print_box+="\n";
    }
    repeat_n_times(width);

  }

  function repeat_n_times(time){
    for (j=0; j<time; j++){
      print_box+="*";
    }
  }
  console.log(print_box);
}
