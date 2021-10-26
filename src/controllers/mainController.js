const path = require('path');

const controller = {
   index: function (req, res){
      return res.render('products/index');
   },
   login: function (req, res){
      return res.render('users/login');
   },
   
   register: function (req, res){
      return res.render('users/register');
   },
   cart: function (req, res){
      return res.render('products/product-cart');
   },
}

module.exports = controller