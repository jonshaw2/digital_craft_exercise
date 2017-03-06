var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function product_sort_price(a, b){
  return a.price-b.price;
}
price_sort = products.sort(product_sort_price);
console.log(price_sort);
