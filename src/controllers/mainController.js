const path = require('path');

const controller = {
   index: function (req, res){
      return res.render(path.resolve(__dirname, '../views/products/index'));
   },
   login: function (req, res){
      return res.render(path.resolve(__dirname, '../views/users/login'));
   },
   
   register: function (req, res){
      return res.render(path.resolve(__dirname, '../views/users/register'));
   },
}

module.exports = controller