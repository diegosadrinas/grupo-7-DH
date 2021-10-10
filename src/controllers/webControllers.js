const path = require('path');

const escritorios = [{
   nombre: 'Escritorio 1',
   descripcion: 'Cuando lugar de trabajo se transforma en tu lugar ideal, no hay Woodstack que pueda faltar en ese lugar',
   precio: 'U$S 65.50',
},
   {
   nombre: 'Escritorio 2',
   descripcion: 'Cuando lugar de trabajo se transforma en tu lugar ideal, no hay Woodstack que pueda faltar en ese lugar',
   precio: 'U$S 47.00',
},  
   {
   nombre: 'Escritorio 3',
   descripcion: 'Cuando lugar de trabajo se transforma en tu lugar ideal, no hay Woodstack que pueda faltar en ese lugar',
   precio: 'U$S 27.50',
},
   {
   nombre: 'Escritorio 4',
   descripcion: 'Cuando lugar de trabajo se transforma en tu lugar ideal, no hay Woodstack que pueda faltar en ese lugar',
   precio: 'U$S 37.50',
}];

module.exports ={
    index: function (req, res){
       return res.render(path.resolve(__dirname, '../views/products/index'));
    },
    login: function (req, res){
       return res.render(path.resolve(__dirname, '../views/users/login'));
    },
    productCart: function (req, res){
       return res.render(path.resolve(__dirname, '../views/products/productCart'));
    },
    productDetail: function (req, res){
       return res.render(path.resolve(__dirname, '../views/products/productDetail'));
    },
    register: function (req, res){
       return res.render(path.resolve(__dirname, '../views/users/register'));
    },
    creacionProductos: function (req, res){
       return res.render(path.resolve(__dirname, '../views/products/creacionProductos'));
    },
    detalle: function (req, res){
      console.log(req.params)
     return res.render(path.resolve(__dirname, '../views/products/productDetail'),{escritorios:escritorios[req.params.id]} );
  },
}