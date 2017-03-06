function call3Times(n, fun) {
  for (i=0; i<n; i++){
    fun();
  }
}

function Hello() {
  console.log ("Hello, world!");
}

call3Times(5, Hello);
