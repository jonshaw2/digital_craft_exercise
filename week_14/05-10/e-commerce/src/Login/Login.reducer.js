const INITIAL_STATE = {
  username : '',
  password : '',
  currentUser : '',
  currentToken : ''
  // put properties you need here
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'passwordChange'){
    return Object.assign({},state,{
      password : action.password
    });
  }
  if (action.type === 'usernameChange'){
    return Object.assign({},state,{
      username : action.username
    });
  }
  if (action.type === 'submitLogin'){
    return Object.assign({},state,{
      currentUser:action.data.username,
      currentToken:action.data.token
    })
  }
  // add if statements to catch specific actions
  // to return different new state from previous state
  return state;
}
