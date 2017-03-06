var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

forEach(arr,
  function(person) {
  console.log('Hello, ' + person.name + '!');
});

function forEach(arr, fun){
  for (i=0; i<arr.length; i++){
    fun(arr[i]);
  }

}
