// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state, action) {
  let flipResult = (Math.random());
  console.log(flipResult);
  return flipResult;
}

export default reducer;
