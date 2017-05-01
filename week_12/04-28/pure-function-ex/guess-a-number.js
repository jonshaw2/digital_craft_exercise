const pureCli = require('./pure-cli');

function reducer(state, input) {
  // put your code here
  randomNum = Math.floor(Math.random()*10+1);
  randomNum = 5;
  intInput = parseInt(input);

  if (state === null){
    return {
      number: randomNum,
      guess: null
    }
  }
    // return {
    //   number: randomNum,
    //   guess: 4
    // }
  if(intInput !== randomNum) {
    return {
      number: randomNum,
      guess: intInput,
      action: null
    }
  }
  if(intInput === randomNum) {
    return {
      number: randomNum,
      guess: intInput,
      action: 'end'
    }
  }
}

module.exports = reducer;

function display(state) {
  if (state.guess === null) {
    console.log('I am thinking of a number between 1-10. Take a guess.');
  } else if (state.number === state.guess) {
    console.log('You win!');
  } else if (state.number > state.guess) {
    console.log('Too low! Try again.');
  } else if (state.number < state.guess) {
    console.log('Too high! Try again.');
  }
}

if (require.main === module) {
  pureCli(reducer, display);
}
