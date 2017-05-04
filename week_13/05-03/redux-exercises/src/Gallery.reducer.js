export default function reducer(state = 0, action) {
  if (action.type === 'previous'){
    let tempState = state;
    if (tempState - 1 < 0){
      tempState = 6;
    }
    return tempState - 1;
  }
  else if (action.type === 'next'){
    console.log('in next');
    let tempState = state;
    if (tempState + 1 > 5){
      tempState = -1;
    }
    return tempState+1
  }
  else if (action.type ==='loadImage'){
    return action.index;
  }

  else{
    return state;
  }
}
