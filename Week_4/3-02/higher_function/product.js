// var arr = [3,4,5];
// var mult = " ";
//
// function multiply(n){
//   if (mult === " "){
//     mult=n;
//   }
//   else {
//     mult*=n;
//
//   }
//
//
//   console.log(n);
//   console.log(mult);
//   return mult;
// }
//
// var sum = arr.forEach(multiply);
// console.log(sum);

var arr = [3,4,5];

function multiply(a, b){
  return a * b;
}

var sum = arr.reduce(multiply);
console.log(sum);
