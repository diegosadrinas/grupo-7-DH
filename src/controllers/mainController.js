const path = require('path');
const fs = require('fs');
const { validationResult, body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcrypt')


const controller = {
   index: function (req, res){
      db.Usuario.findAll({
         include:[{association: "productos"}]
      })
         .then( (productos) => {
            console.log(productos)
            return res.render('products/index', {productos: productos});
         })
   },

   // Validacion y login de session
   login: async function (req, res){
      return res.render('users/login');
   },
   processLogin: function(req, res){
      let errors = validationResult(req);
      let usuarioALoguearse;

      if(errors.isEmpty()){
         db.Usuario.findAll()
            .then(function(users) {
               for (let i = 0; i < users.length; i++){
               if(users[i].email == req.body.email){
                  console.log("hay coincidencia")
                  if(bcrypt.compareSync(req.body.password, users[i].password)){
                     usuarioALoguearse = users[i];
            
                     req.session.usuarioLogueado = usuarioALoguearse;
                     return res.render('Success!')
                  
               }
            }
         }})

         if(usuarioALoguearse == undefined){
            return res.render('users/login', {errors: [
               {msg: 'Credenciales invalidas'}
            ]});
         }
         
      }   
         return res.render('users/login', {errors: errors.errors});
   },

   register: function (req, res){
      return res.render('users/register');
   },
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
			
         return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			})
      };

      db.Usuario.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      is_admin: false
      });
		
      return res.render('users/usuarioExito');
	},

   profile: function (req, res){
      return res.render('users/userProfile')
   },

   cart: function (req, res){
      return res.render('products/product-cart');
   },
}

module.exports = controller