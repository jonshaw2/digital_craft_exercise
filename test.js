function greeting (person, callback){
  callback(person);
}

// greeting('bob',function(person){
//   console.log("hello "+person);
// });


function product(numbers, callback){
  result = numbers.reduce(function(a,b){
    return a*b;
  });
  callback(result);
}

// product([1,2,3,4,5],function(result){
//   console.log("the product is "+ result);
// });

function square(num, callback){
  setTimeout(function(){
    result = num*num;
    console.log("the square is: "+result);
    callback(result);
  },1000);

}

function squareRoot(num, squareit){
  setTimeout(function(){
    result = Math.sqrt(num);

    squareit(result);
  },500);

}

// square(5, function(result){
//   console.log('the square is: '+result);
// });




var x = 4;
var y = 3;
// var x2 = square(x);

square(x, function(x2){
  square(y, function(y2){
    var sum = x2+y2;
    console.log("the sum is: "+sum);
    squareRoot(sum, function(answer){

      console.log("the root is: "+answer);
    });
  });

});
