const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const bcrypt = require ('bcrypt');

const controller = {
   index: function (req, res){
      db.Producto.findAll({
      })
         .then( (products) => {
            return res.render('products/index', {products: products});
         })
         .catch(function(err){

            console.log("Error en productController.index:" + String(err));
        
        });
   },

   // Validacion y login de session
   login: async function (req, res){
      return res.render('users/login');
   },

   loginProcess: (req, res) => {
      let error = validationResult(req);
        if (error.errors.length > 0){
            return res.render ('users/login', {
                errors: error.mapped(),
            })
        }
      
      let userToLogin = db.Usuario.findOne({ where: { email: req.body.email }}).then((userToLogin)=>{

         // COMO DIVIDIR PARA TIRAR ERROR DE MAIL POR UN LADO Y PASS POR OTRO ?? NO ME SALE
         if(userToLogin != null && bcrypt.compareSync(req.body.password, userToLogin.password)){
            req.session.userLogged = userToLogin;
            delete userToLogin.password;
            if (req.body.remember_user){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
            }
            res.redirect("/profile")

        } else res.render('users/login', {
           errors: {
              email:{
                 msg: 'Usuario y/o contraseña incorrecto'
              }
           }
        })
        })
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
      password: bcrypt.hashSync(req.body.password, 10),
      is_admin: false
      })
         .then( () => {
            res.render('users/usuarioExito')
          })
         .catch(function(err){

            console.log("Error en processRegister:" + String(err));
        
        })
	},



   profile: function (req, res){
      
      return res.render('users/userProfile', {
         user: req.session.userLogged
      })
   },

   logout: function (req, res){
      res.clearCookie('userEmail');
      req.session.destroy();
      return res.redirect('/');
   },

   list: function (req, res){
      db.Usuario.findAll({
      })
         .then( (user) => {
            return res.json(user);
         })
         .catch(function(err){

            console.log("Error en productController.index:" + String(err));
        
        });
   },
}


module.exports = controller