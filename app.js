const express = require('express');
const app = express()

// app.METHOD(path, handler);
app.get('/', function(req, res) {
  res.send("Hello World");
});

app.get('/api/products', (req, res) => {
  let products = [
    { name: "Javascript Book", price: 9.99},
    { name: "A Christmas Carol", price: 19.99}
  ]
  let stringified = JSON.stringify(products)
  res.send(stringified);
});

app.listen(3000, function() {
  console.log("Listening on port 3000. Go to http://localhost:3000/")
})
