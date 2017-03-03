function hello(name){

  if (!name){
    console.log("Hello, world!");
  }
  else{
    console.log("Hello, "+name);
  }
}

function madlib(name, subject){
  console.log(name +"\'s favorite subject in school is "+subject);
}

function tipAmount(bill, service_level){
  var total = bill;
  if (service_level == "good"){
    total = (total * 0.2).toFixed(2);
  } else if (service_level == "fair"){
    total = (total * 0.15).toFixed(2);
  } else {
    total = (total * 0.1).toFixed(2);
  }
  console.log(total);
}

function totalAmount(bill, service_level){
  var total = bill;
  if (service_level == "good"){
    total = (total * 1.2).toFixed(2);
  } else if (service_level == "fair"){
    total = (total * 1.15).toFixed(2);
  } else {
    total = (total * 1.1).toFixed(2);
  }
  console.log(total);
}

function splitAmount(bill, service_level, patron){
  var total = bill;
  if (service_level == "good"){
    total = (total * 1.2).toFixed(2)/patron;
  } else if (service_level == "fair"){
    total = (total * 1.15).toFixed(2)/patron;
  } else {
    total = (total * 1.1).toFixed(2)/patron;
  }
  console.log(total);
}

function printNumbers(start_num, end_num){
  number = start_num;
  for(i=0; i<=end_num-start_num; i++){
    console.log(number);
    number++;
  }
  number = start_num;
  while (number <= end_num){
    console.log(number);
    number ++;
  }
}

function printSquare(length){
  for (i=1; i<=length; i++){
    square = "";
    for (j=1; j<=length; j++){
      square += "*";
    }
    console.log(square);
  }
}

function printBox(width, height){
  for (i=1; i<=height; i++){
    square = "";
    for (j=1; j<=width; j++){
      if (i == 1 || i == height){
        square += "*";
      }

      else if (j == 1 || j == width){
        square += "*";
      }
      else{
        square += " ";
      }
    }
    console.log(square);
  }
}

function printBanner(some_text){
  var length = some_text.length;
  for (i=1; i<=3; i++){
    square = "";
    for (j=1; j<=length+2; j++){
      if (i == 1 || i == 3){
        square += "*";
      }

      else if (j == 1 || j == length+2){
        square += "*";
      }
      else{
        square += some_text[j-2];
      }
    }
    console.log(square);
  }
}

function factors(number){
  factor = [];
  for (i = 0; i <= Math.sqrt(number); i++){
    if (number%i === 0){
      factor.push(i);
      factor.push(number/i);
    }

  }
  factor = factor.sort(sortNumber);
  console.log(factor);

}
function sortNumber(a,b){
  return a-b;
}

function leetspeak(word){
  l33tsp34k = [];
  for (i=0; i< word.length; i++){

    if (word[i] == "A"){
      l33tsp34k.push("4");
    }
    else if (word[i] == "E"){

      l33tsp34k.push("3");
    }
    else if (word[i] == "G"){

      l33tsp34k.push("6");
    }
    else if (word[i] == "I"){
      l33tsp34k.push("1");
    }
    else if (word[i] == "O"){
      l33tsp34k.push("0");
    }
    else if (word[i] == "S"){

      l33tsp34k.push("5");
    }
    else if (word[i] == "T"){
      l33tsp34k.push("7");
    }
    else{
      l33tsp34k.push(word[i]);
    }
  }
  console.log(l33tsp34k.join(""));

  for (i=0; i< word.length; i++){
    word = word.replace("A","4");
    word = word.replace("E","3");
    word = word.replace("G","6");
    word = word.replace("I","1");
    word = word.replace("O","0");
    word = word.replace("S","5");
    word = word.replace("T","7");
  }

  console.log(word);
}

function matrixAdd(matrix_a, matrix_b) {
  var matrix_c = matrix_a;
  for (i=0; i<matrix_a.length;i++){
    for (j=0; j<matrix_a[i].length;j++){
      matrix_c[i][j] = matrix_a[i][j] + matrix_b[i][j];
    }

  }
  console.log(matrix_c);
}

function matrixMultiply(matrix_a, matrix_b){
  var matrix_c = [[0,0],[0,0]];
  for (i=0; i<matrix_a.length;i++){
    for (j=0; j<matrix_a.length;j++){
      for(k=0; k<matrix_a.length;k++){
        matrix_c[i][j] += matrix_a[i][k] * matrix_b[k][j];
      }
    }
  }
  console.log(matrix_c);
}

function rockPaperScissors(player_1, player_2){
    if (player_1 == player_2){
      console.log("DRAW");
    }
    else if (player_1 == "rock" && player_2 =="paper"){
      console.log("PLAYER 2 WIN!");
    }
    else if (player_1 == "paper" && player_2 =="scissor"){
      console.log("PLAYER 2 WIN!");
    }
    else if (player_1 == "scissor" && player_2 =="rock"){
      console.log("PLAYER 2 WIN!");
    }
    else{
      console.log("PLAYER 1 WIN!");
    }
}

function ticTacToe(tile){
  var condition_x;
  var condition_y;
  for (i=0; i<tile.length; i++){
    for (j=0; j<tile[i].length;j++){
      console.log(tile[i][j]);
      console.log(i);
      console.log(j);
      if (tile[i][j] == tile[i+1][j] && tile[i+1][j]== tile[i+2][j]){
        console.log("player 1 win!");
      }
      else if (tile[i][j] == tile[i][j+1] && tile[i][j+1]== tile[i][j+2]){
        console.log("player 1 win!");
      }

      else{
        console.log("draw");
      }

    }
  }
}

ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
]);
ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
]);

  ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
]);
