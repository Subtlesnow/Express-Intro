const express = require('express');
const app = express()

// app.METHOD(path, handler);
app.get('/', function(req, res) {
  res.send("Hello World");
});
app.listen(3000, function() {
  console.log("Listening on port 3000. Go to http://localhost:3000/")
})
