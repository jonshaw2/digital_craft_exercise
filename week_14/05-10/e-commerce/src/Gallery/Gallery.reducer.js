const INITIAL_STATE = {
  index: {},
  products: {},
  category: []
}

function reducer(state = INITIAL_STATE, action){
  if (action.type === 'gallery_initiate'){
    let newCategory = []
    var categories = {}
    var index = {}


    let category = action.payload.category;

    for (let i = 0; i<category.length; i++){
      newCategory.push(category[i].category);
      categories[category[i].category]=[];
      index[category[i].category]=[0];

    }

    let product = action.payload.product;
    for (let j = 0; j<product.length; j++){
      categories[product[j].category].push(product[j])
    }


    return Object.assign({}, state, {
      index: index,
      products: categories,
      category: newCategory

    })
  }

  return state;
}

export default reducer
