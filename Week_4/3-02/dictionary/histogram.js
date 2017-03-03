function letterHistogram(word){
  var word_count={};
  for (var i=0; i<word.length;i++){
    console.log(word[i]);
    if (word[i] in word_count !== true){
      word_count[word[i]]=1;
    }
    else{
      word_count[word[i]] += 1;
    }

  }
  console.log(word_count);
}



letterHistogram('bananas');

function topLetterCount(sentence){
  var word_count={};
  var top_letter=[["nuull","null"],[0,0]];
  for (i=0; i<sentence.length;i++){
    console.log(sentence[i]);
    if (sentence[i] in word_count !== true){
      word_count[sentence[i]]=1;
    }
    else{
      word_count[sentence[i]] += 1;
    }
  }

  for (var j in word_count){
    console.log(j);
    console.log(word_count[j]);
    if (j!= " "){
      if (word_count[j] > top_letter[1][0] || word_count[j] > top_letter[1][1]){
        if (top_letter[1][0] > top_letter[1][1]){
          top_letter[0][1] = j;
          top_letter[1][1] = word_count[j];
        }
        else{
          top_letter[0][0] = j;
          top_letter[1][0] = word_count[j];
        }

      }
    }
  }
  console.log("top words are "+top_letter[0][0]+": "+top_letter[1][0]+" and "+top_letter[0][1]+": "+top_letter[1][1]);
}

topLetterCount("a aa bb bb ee ee ce dce ec f cgb");
