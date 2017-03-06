reduce([1, 2, 3], function(value, n) { return value + n; }, 0);

function reduce(arr, fun){
  total = 0;
  for (i=0; i<arr.length; i++){
    total= fun(arr[i], total);

  }
  console.log(total);
}
