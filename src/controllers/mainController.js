const path = require('path');
const fs = require('fs');
const { validationResult, body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require ('bcrypt');

const controller = {
   index: function (req, res){
      db.Producto.findAll({
      })
         .then( (product) => {
            return res.render('products/index', {product: product});
         })
         .catch(function(err){

            console.log("Error:" + String(err));
        
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
            console.log("este es el req.session: " + req.session.userLogged)
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

            console.log("Error:" + String(err));
        
        })

      // ESTO ES OPCIONAL !!

      // Falta validar el intento de registrarse con un correo ya guardado.
      // Prueba 1
      // let userInDB = db.Usuario.findByField ('email', req.body.email);
      // if (userInDB) {
      //    return res.send('El mail ya esta registrado')
      // }

      // Prueba 2
      // let userToLog = db.Usuario.findOne({ where: { email: req.body.email } 
      // }) .then((userToLog)=> {
      //     if(userToLog !== null && bcryptjs.compareSync(req.body.password, userToLog.dataValues.pass )){
      //     req.session.loggedUser = userToLog;
      //     if (req.body.remember_user){
      //         res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
      //     }
      //     res.redirect("/")
      // }else res.render("login",{ errors :
      //     [{msg: "No exites como usuario"}]})

      // })
      
	},



   profile: function (req, res){
      console.log(req.cookies.userEmail);
      return res.render('users/userProfile', {
         user: req.session.userLogged
      })
   },

   logout: function (req, res){
      res.clearCookie('userEmail');
      req.session.destroy();
      return res.redirect('/');
   }
}


module.exports = controller