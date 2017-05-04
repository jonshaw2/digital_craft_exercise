export default function reducer(state, action) {
  let newArray = Object.assign({}, state);

  if (action.type === 'flight'){
    newArray.heroHp += 2;
    return newArray;
  }
  else if (action.type ==='dragonWin'){
    console.log('in dragonwin');
    newArray.heroHp -= 5;
    if (newArray.heroHp <= 0){
      newArray.message = 'Hero Died';
    }
    return newArray;
  }
  else if (action.type ==='heroWin'){
    console.log('in hero win');
    newArray.dragonHp -= 5;
    if (newArray.dragonHp <= 0){
      newArray.message = 'Dragon Dead';
    }
    return newArray;
  }
  else if (action.type ==='reset'){
    console.log('in reset');
    newArray = {
      dragonHp: 20,
      heroHp: 10,
      message: ''
    }

    return newArray;
  }

  else {
    console.log('in everything else');
  }

  return state;
}
