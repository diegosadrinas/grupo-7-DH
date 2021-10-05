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
    detalle: function (req, res){
      console.log(req.params)
     return res.render(path.resolve(__dirname, '../views/productDetail'),{escritorios:escritorios[req.params.id]} );
  },
}