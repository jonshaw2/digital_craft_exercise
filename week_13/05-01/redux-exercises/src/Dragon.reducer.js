function reducer(state = [20, 10, ''], action) {
  if (action.type === 'flight'){
    console.log('in flight');
    console.log(state);
    let newArray = state.map((item, i) => i === 1 ? state[1]+5 : item
    );
    return newArray;
  }
  else if (action.type ==='dragonWin'){
    console.log('in dragonwin');
    let newArray = state.map((item, i) => i === 1 ? state[1]-5 : item);
    if (newArray[1] <= 0){
      newArray = newArray.map((item, i) => i === 2 ? 'Hero Died' : item);
    }
    return newArray;
  }
  else if (action.type ==='heroWin'){
    console.log('in hero win');
    let newArray = state.map((item, i) => i === 0 ? state[0]-5 : item);
    if (newArray[0] <= 0){
      newArray = newArray.map((item, i) => i === 2 ? 'Dragon Dead' : item);
    }
    return newArray;
  }

  else {
    console.log('in everything else');
  }

  return state;
}

export default reducer;
