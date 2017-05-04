// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
export default function reducer(state = 'images/quarter-front.png', action) {
  if (action.type === 'flipHead'){
    return 'images/quarter-front.png';
  }
  else {
    return 'images/quarter-back.png'
  }
}
