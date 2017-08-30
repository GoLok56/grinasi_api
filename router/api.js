const express = require('express');
const request = require('request');

const TOKEN = "de8c73720048c353579e0cb1af71f02c01c77908";

const router = express.Router();

// Get the product list
router.get("/product", function(req, res){
  request.get({
    'url':'http://api.bisatopup.com/product',
    'headers': {
      'X-Authorization': TOKEN
    }
  },function(error, header, body){
    if(error) throw error;

    console.log(typeof(body));

    body = JSON.parse(body);
    body.forEach(product => {
      product.tambahanField = "Tambah";
      product.tambahanField2 = "Tambah tambah";
      product.tambahanField3 = "Tambah tambah tambah";
    });
    res.send(body);
  });
});

// TODO Implements the rest feature in Evernote's note

module.exports = router;
