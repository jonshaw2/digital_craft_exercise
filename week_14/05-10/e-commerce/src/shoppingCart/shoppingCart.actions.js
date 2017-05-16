import $ from 'jquery';

function shoppingCart(data){
  console.log(data);
  return ({
    type: 'getShoppingCart',
    payload: data
  })
}
function shoppingCartError(resp){
  console.log('error: ',resp);
  return;
}

export function getCart(token, account_id){
  console.log('token:',token);
  console.log('id:',account_id);
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:7000/api/shopping_cart',
      data: {
        token: token,
        account_id: account_id
      },
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(shoppingCart(data)))
    .catch(resp => dispatch(shoppingCartError(resp)))
  };
  return asyncAction;
}
