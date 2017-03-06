strMultiply('abc', 5);

function strMultiply(word, times){
  word = word.split().map(to_arr);

  function to_arr(n){
    return n;
  }

  var curr_word = "";


  for (i=0; i<times; i++){
    console.log(word);
    curr_word = word.reduce(multiply_word, curr_word);

  }
  function multiply_word(current_word, word){
    return current_word + word;
  }

  console.log(curr_word);
}
