// Exercise 1
// var name = 'Loki';
// function hello(name) {
//   console.log('Hello,', name);
// }
// hello('Thor');
//


// Exercise 2
// var counter = 0;
// function hello() {
//   console.log('Hello, world!');
//   counter = counter + 1;
// }
// hello();
// hello();
// console.log('Called hello', counter, 'times.');


// 'Hello, world!'
//
// 'Hello, world!'
//
// 2

//Exercise 3
// var counter = 0;
// function updateCounter() {
//   counter += 1;
//   console.log('The global count is', counter);
//   var counter = 0;
//   console.log('The local count is reset to', counter);
// }
// updateCounter();
// updateCounter();
// updateCounter();

// undefined,
// 0
// undefined
// 0
// undefined0
// 0

//Exercise 4

// Line 1
var a = 0;
console.log(a,f);
// Line 2
function f(c) {
  console.log(a,c,b,f);
  // Line 3
  var b = 1;
  console.log(a,b,c,f);
  // Line 4
  function g(d) {
    console.log(e,d,a,b,c,f);
    // Line 5
    var e = 4;
    console.log(e,d,a,b,c,f);
    // Line 6
    console.log(a,b,c,d,e,f);
  }
  // Line 7
    console.log(a,b,c,f,g);
  return g;

  // Line 8
}
// Line 9
f(2)(3);
console.log(a,f);
// Line 10
