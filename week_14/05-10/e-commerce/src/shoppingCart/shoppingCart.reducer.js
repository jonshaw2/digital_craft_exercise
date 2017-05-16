const INITIAL_STATE = {
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'getShoppingCart'){
    return Object.assign ({},state,{
      cart: action.payload
    })
  }
  // add if statements to catch specific actions
  // to return different new state from previous state
  return state;
}
