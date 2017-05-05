const INITIAL_STATE ={
  name: 'Men' ,
  movieData: null,
  isFetching: false
};

function reducer(state=INITIAL_STATE, action){
  if (action.type === 'changeName'){
    return Object.assign({}, state, {
      name: action.value
    });
  } else if (action.type === 'movie_info'){
    return Object.assign({}, state, {
      movieData: action.payload,
      isFetching: false,
      error: null
    });
  }
  return state;
}

export default reducer;
