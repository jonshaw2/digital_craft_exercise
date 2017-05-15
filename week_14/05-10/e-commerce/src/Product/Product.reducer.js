const INITIAL_STATE = {
  index: {},
  products: {},
  category: []
}

function reducer(state = INITIAL_STATE, action){
  if (action.type === 'product_initiate'){


    return Object.assign({}, state, {
      productInfo: action.payload


    })
  }

  return state;
}

export default reducer
