const express = require('express');
const app = express()

// app.METHOD(path, handler);
app.get('/', function(req, res) {
  res.send("Hello World");
});

let products = [
  { id: 1, name: "Javascript Book", price: 9.99},
  { id: 2, name: "A Christmas Carol", price: 19.99}
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
})

app.listen(3000, function() {
  console.log("Listening on port 3000. Go to http://localhost:3000/")
})
