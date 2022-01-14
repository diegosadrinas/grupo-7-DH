const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult, body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require ('bcrypt');
const { text } = require('express');



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
      // console.log(req.session)
      return res.render('users/login');
   },

   // PRUEBA LOGIN 2

   loginProcess: (req, res) => {

      let error = validationResult(req);
        if (error.errors.length > 0){
            return res.render ('users/login', {
                errors: error.mapped(),
            })
        }

      let userToLogin = db.Usuario.findOne({ where: { email: req.body.email }}).then((userToLogin)=>{


         if(userToLogin != null ){
            req.session.loggedUser = userToLogin;
            console.log("este es el req.session: " + req.session.loggedUser)
            if (req.body.remember_user){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
            }
            res.redirect("/")
        }else res.render('users/login', {
           errors: {
              email:{
                 msg: 'No se encuentra en la Base de Datos'
              }
           }
        })
            console.log("llegó hasta el else")
            
        })
   },

   register: function (req, res){
      return res.render('users/register');
   },

   findByField:(field, text) => {
      let allUsers = this.findAll();
      let userFound = allUsers.find(oneUser => oneUser[field] === text)
      return userFound;
   },

	processRegister: (req, res) => {


		const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {
			
         return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			})
      };

      // !!!!!!!!! Querer registrar un mail Ya Registardo prueba 1

      // let userInDB = db.Usuario.findByField ('email', req.body.email);
      
      // if (userInDB) {
      //    return res.send('El mail ya esta registrado')
      // }

      // !!!!!!!!! Querer registrar un mail Ya Registardo prueba 2

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


      db.Usuario.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
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