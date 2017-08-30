const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

// Setting up the middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('api', require('./router/api'));

app.get('/', function(req, res){
  res.send("Grinasia beli pulsa API ...");
});

app.listen(PORT);
console.log("Server is running...")skalks;
