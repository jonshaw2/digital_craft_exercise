var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function add_price(a, b){
  return a+b;
}
function product_price(n){
  return n.price;
}
var prices = products.map(product_price);
console.log(prices);

var total_price = prices.reduce(add_price);
console.log(total_price);
