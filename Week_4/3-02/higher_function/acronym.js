
function acronym(word){
  var a_word = word.reduce(acronym_sort, "");

    function acronym_sort(combined_word, the_word){

      return combined_word + the_word[0];

    }
  return a_word;
}

 var acronym_found = acronym(['very', 'important', 'person']);

 console.log(acronym_found);
