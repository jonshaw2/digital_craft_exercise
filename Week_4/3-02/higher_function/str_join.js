// function strJoin(strs, sep){
//   combined2 = strs.reduce(function(currentValue, name) {
//     if (currentValue ==='') {
//       return name;
//     } else {
//       return currentValue + sep + name;
//     }
//
//
//   }, '');
//   return combined2;
// }
//
// combined = strJoin(['Hello', 'and', 'goodbye'], ' ');
// console.log(combined);


function strJoin(strs, sep){
  combined2 = strs.reduce(combine_str);

    function combine_str(currentValue, name){
      if (currentValue ==='') {
        return name;
      } else {
        return currentValue + "sep" + name;
      }
    }
  return combined2;
}



combined = strJoin(['Hello', 'and', 'goodbye'], ' ');
console.log(combined);
