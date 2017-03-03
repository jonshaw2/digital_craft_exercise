var arr = [-7, -5, 1,4,7,-4];

function isPos(n) {
  return n>0;
}

var pos = arr.filter(isPos);
console.log(pos);
