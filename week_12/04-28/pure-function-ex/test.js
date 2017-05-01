a = [1,2,3]

function test(testing){
  let testb = testing;
  testb = testb.concat();
  testb.push('a');
  // testb.push(5);
  return testb;
}

b = test(a);

console.log(a);
console.log(b);
