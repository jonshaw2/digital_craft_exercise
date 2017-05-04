function reducer(state = {dragonHp: 20, heroHp: 10, message: ''}, action) {
  let newArray = state;
  if (action.type === 'flight'){
    newArray.heroHp = newArray.heroHp + 2;
    return newArray;
  }
  else if (action.type ==='dragonWin'){
    console.log('in dragonwin');
    newArray.heroHp = newArray.heroHp - 5;
    if (newArray.heroHp <= 0){
      newArray.message = 'Hero Died';
    }
    return newArray;
  }
  else if (action.type ==='heroWin'){
    console.log('in hero win');
    newArray.dragonHp = newArray.dragonHp - 5
    if (newArray.dragonHp <= 0){
      newArray.message = 'Dragon Dead';
    }
    return newArray;
  }

  else {
    console.log('in everything else');
  }

  return state;
}

export default reducer;
