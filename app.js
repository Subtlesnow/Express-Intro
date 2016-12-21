const express = require('express')
const app = express()
const body_parser = require('body-parser')

// app.METHOD(path, handler);
app.get('/', function(req, res) {
  res.send("Hello World");
});

let products = [
  { id: 1, name: "Javascript Book", price: 9.99},
  { id: 2, name: "A Christmas Carol", price: 19.99},
  { id: 3, name: "Jungle Book", price: 10.99}
]

app.get('/api/products', (req, res) => {
  let stringified = JSON.stringify(products)
  res.send(stringified);
});

app.get('/api/products/:id', (req, res) => {
  let id = Number(req.params.id)
  let product = products.find( (element) => element.id === id);
  let stringified = JSON.stringify(product);
  res.send(stringified);
});

const json_parser = body_parser.json()
app.post('/api/products', json_parser, (req, res) => {

  // let max_id = -1000;
  // for(let i = 0; i < products.length; i++) {
  //   if(products[i].id > max_id) {
  //     max_id = products[i].id;
  //   }
  // }
  let max_id = products.reduce(
    (new_max_id, product) => {
      return (product.id > new_max_id) ? product.id : new_max_id;
    },
    -1000
  );

  let new_product = req.body
  //console.log(req.body);
  new_product.id = max_id + 1;
  res.send(new_product);
  products.push(new_product);
})

app.listen(3000, function() {
  console.log("Listening on port 3000. Go to http://localhost:3000/")
})
