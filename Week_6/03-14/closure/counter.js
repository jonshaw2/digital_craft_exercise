function counter(count) {

  function increment(){
    count++;
    console.log(count);
    return count;
  }

  function decrement(){
    count--;
    console.log(count);
    return count;
  }

  return {
    increment: increment,
    decrement: decrement
  };
}
var count;
var count1 = counter(4);
var count2 = counter(3);

count1.increment();
count1.increment();
count1.decrement();
count1.decrement();
