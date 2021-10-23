const path = require('path');

const controller = {
    productCart: function (req, res){
        return res.render(path.resolve(__dirname, '../views/products/productCart'));
     },
    productDetail: function (req, res){
        return res.render(path.resolve(__dirname, '../views/products/productDetail'));
     },
    creacionProductos: function (req, res){
        return res.render(path.resolve(__dirname, '../views/products/creacionProductos'));
     },
    detalle: function (req, res){
       console.log(req.params)
      return res.render(path.resolve(__dirname, '../views/products/productDetail'));
   },
}

module.exports = controller