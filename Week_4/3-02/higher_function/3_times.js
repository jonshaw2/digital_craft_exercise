function call3Times(fun) {
  fun();
  fun();
  fun();

}

function Hello() {
  console.log ("Hello, world!");
}

call3Times(Hello);
