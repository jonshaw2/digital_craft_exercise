const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Promise = require('bluebird');
const pgp = require('pg-promise')();

const db = pgp({
  database: 'ecommerce_db'
});
const uuid = require('uuid');

const app = express();
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(cors());


app.get('/api/products', (req, resp, next) => {

  var data = {}
  db.any('SELECT DISTINCT category from product')
    .then(function(categories){
      data.category = categories;
       db.any(`
     select * from product`)
   .then(function(products){
     data.product = products;
     resp.json(data)
   })
 }).catch(next);
})

// app.get('/api/products', (req, resp, next) => {
//   db.any('select * from product')
//     .then(account => resp.json(account))
//     .catch(next);
// });

app.get('/api/products/:id', (req, resp, next) => {
  let product_id = req.params.id;
  db.one(`
    select * from product
    where id = $1`,[product_id])
  .then(product => resp.json(product))
  .catch(next);
})

app.post('/api/user/signup', (req, resp, next) =>{
  let user_name = req.body.username;
  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;
  bcrypt.hash(password, 10)
    .then(function(encrypted){
      return db.one(`
        insert into account values(default, $1, $2, $3, $4)
        returning *
        `, [user_name, name, encrypted, email]);
    })
    .then(page => resp.json(page))
    .catch(next);
})

app.post('/api/user/login', (req, resp, next) => {
  let user_name = req.body.username;
  let password = req.body.password;
  var matched
  db.one(`
    SELECT * from account
    WHERE username = $1`, [user_name])
    .then(function(data){
      matched = bcrypt.compare(password, data.password)
      return (data);
    })
    .then(function(data){
      if (matched){
        let token = uuid.v4()
        console.log(token);
        db.none(`
          insert into auth_token values(default, $1, $2)`,[token, data.id])
        data.token = token

        resp.json(data)

      } else{


      }

    }).catch(next);

})

app.use(function authentication(req, resp, next){
  let token = req.body.token || req.query.token;
  console.log('token:',token);
  if (token){

    db.oneOrNone(`
      Select * from auth_token where auth_token = $1`,[token])
    .then(function(user){

      if (user){
        console.log('passed');
        next();
      }
      else{
        console.log('blocked');
        resp.json('unauthorized');
      }
    })

  }
  else {
    resp.json('unauthorized');
  }
})

app.post('/api/shopping_cart', (req, resp, next) => {
  let product_id = req.body.product_id;
  let account_id = req.body.account_id;
  db.none(`
    INSERT into shopping_cart values(default, $1, $2)`,[product_id, account_id])
  .then(function(data){
    resp.json(data);
  }).catch(next);
});

app.get('/api/shopping_cart', (req, resp, next) =>{
  let account_id = req.query.account_id;
  db.any(`
    SELECT * from shopping_cart
    where account_id = $1`,[account_id])
  .then(function(data){
    resp.json(data);
  }).catch(next);
})

app.post('/api/shopping_cart/checkout', (req, resp, next) =>{
  let account_id = req.body.account_id;
  console.log('starting checkout');
  db.any(`
    SELECT * from shopping_cart
    where account_id = $1`,[account_id])
  .then(function(data){
    console.log('starting mapping');
    console.log(data);
     var promises = data.map((product)=>{
      db.none(`
        INSERT into purchase values(default, $1, $2)`,[product.product_id, product.account_id])
    })
    console.log('starting promises');
    return Promise.all(promises)

  }).then(function(data){
    db.none(`DELETE FROM shopping_cart
    WHERE account_id = $1`,[account_id])

  }).then(function(){
    resp.json('done');
  }).catch(next);

})

app.listen(7000, () =>{
  console.log('listening to 7000 yo');
});
