filter([1, 2, 3], function(n) { return n % 2 === 1 });

function filter(arr, fun){
  var filtered = [];
  for (i=0; i<arr.length; i++){
    if(fun(arr[i])){
      filtered.push((arr[i]));
    }

  }
  console.log(filtered);
}
