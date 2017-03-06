map([1, 2, 3], function(n) { return n * n; });

function map(arr, fun){
  var multiply = [];
  for (i=0; i<arr.length; i++){
    multiply.push(fun(arr[i]));
  }
  console.log(multiply);
}
