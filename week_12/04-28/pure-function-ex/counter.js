const pureCli = require('./pure-cli');

function reducer(state, input) {
  // put your code here
  if (state === null) {
    return 0;
  }
  if (input === '+') {
    return state + 1;
  }else if (input === '-') {
    return state - 1;
  }else if (!isNaN(Number(input))) {
    return state * Number(input);
  }else if (input === 'q') {
    return 'end';
  }else {
    return state;
  }
}

module.exports = reducer;

function display(state) {
  console.log(state);
}

if (require.main === module) {
  pureCli(reducer, display);
}
