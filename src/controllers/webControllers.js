const path = require('path');



module.exports ={
    index: function (req, res){
       return res.render(path.resolve(__dirname, '../views/index'));
    },
    login: function (req, res){
       return res.render(path.resolve(__dirname, '../views/login'));
    },
    productCart: function (req, res){
       return res.render(path.resolve(__dirname, '../views/productCart'));
    },
    productDetail: function (req, res){
       return res.render(path.resolve(__dirname, '../views/productDetail'));
    },
    register: function (req, res){
       return res.render(path.resolve(__dirname, '../views/register'));
    },
    creacionProductos: function (req, res){
       return res.render(path.resolve(__dirname, '../views/creacionProdcutos'));
    },
}