import $ from 'jquery';

function productInfo(data){
console.log('data:', data);
  return {type: 'product_initiate', payload: data};
}
function productError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  console.log(error);
}
function shoppingCart(data){
  console.log('data:', data);
  return{type: 'product_initiate',payload:data};
}

export function buyItRightMeow(id,token,account_id){
  console.log(token);
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:7000/api/shopping_cart/',
      data: JSON.stringify({
        token: token,
        product_id: id,
        account_id: account_id
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(shoppingCart(data)))
    .catch(resp => dispatch(productError(resp)))
  };
  return asyncAction;
}

export function getProduct(id){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:7000/api/products/' + id,
      method: 'get',
      dataType: 'JSON',
      contentType: 'application/json'
    })
    .then(data => dispatch(productInfo(data)))
    .catch(resp => dispatch(productError(resp)))
  };
  return asyncAction;
}
