function wordHistogram(sentence){
  word_count = {};
  sentence_split = sentence.split(" ");

  for (i = 0; i< sentence_split.length; i++){
    if (sentence_split[i] in word_count !== true){
      word_count[sentence_split[i]]=1;
    }
    else{
      word_count[sentence_split[i]]+=1;
    }

  }
  console.log(word_count);
}


wordHistogram('to be or not to be');
