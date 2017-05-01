const pureCli = require('./pure-cli');

function reducer(state, input) {
  // put your code here
  if (state === null) {
    return {
      stack: []
    };
  }



  if (input !== '+' || input!== '-'){
    newArray = state.stack.concat([parseInt(input)]);
    
  }

  // if (state.stack.length < 2){
  //   return {
  //     stack: state.stack,
  //     action: 'invalid stack'
  //   }
  // }

  if (input === '+'){
    let stack = state.stack;
    add1 = stack[stack.length-1];
    add2 = stack[stack.length-2];

    sum = add1 + add2;
    newArray = stack.slice(0, stack.length -2);
    newArray = newArray.concat([sum]);
  }

  if (input === '-'){
    let stack = state.stack;
    add1 = stack[stack.length-1];
    add2 = stack[stack.length-2];

    sum = add1 - add2;
    newArray = stack.slice(0, stack.length -2);
    newArray = newArray.concat([sum]);
  }

  if (input === '*'){
    let stack = state.stack;
    add1 = stack[stack.length-1];
    add2 = stack[stack.length-2];

    sum = add1 * add2;
    newArray = stack.slice(0, stack.length -2);
    newArray = newArray.concat([sum]);
  }

  if (input === '/'){
    let stack = state.stack;
    add1 = stack[stack.length-1];
    add2 = stack[stack.length-2];

    sum = add1 / add2;
    newArray = stack.slice(0, stack.length -2);
    newArray = newArray.concat([sum]);
  }

  if (input ==='q'){
    return {
    stack: state.stack,
    action: 'end'
  };
  }


  return {
    stack: newArray
  };

}

module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
