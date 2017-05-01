const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise')();
const db = pgp({
  database: 'contact_list'
});
const app = express();

app.use(bodyParser.json());

app.use(cors());


app.delete('/api/contacts/:id', (req, resp, next) =>{
  let data = req.params;
  console.log(data.id);
  db.none('delete from contact where id=$1',data.id)
    .then(() => resp.send('delete'))
    .catch(next);
});

app.get('/api/contacts', (req, resp, next) =>{
  db.any('select * from contact')
    .then(contacts => resp.json(contacts))
    .catch(next);
});

app.post('/api/contacts', (req, resp, next) =>{
  console.log('in the post submitEntry');
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let type = req.body.type;
  db.one('insert into contact values (default, $1, $2, $3, $4) returning *', [name,phone, email, type])
    .then((contact) => resp.json(contact)
  )
    .catch(next);

});

app.put('/api/contacts/:id', (req, resp, next) =>{
  let data = req.params;
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let type = req.body.type;
  console.log(data.id);
  console.log(name);
  db.one (`update contact
          set
            name= $1,
            phone= $2,
            email= $3,
            type= $4
          where
            id=$5
            returning *`,[name, phone,email, type, data.id])
    .then((contact) => resp.json(contact)
  )
    .catch(next);
});

app.listen(3000, () => console.log('Listening on 3000'));
