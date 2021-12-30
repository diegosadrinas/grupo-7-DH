const path = require('path');
const fs = require('fs');


const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult, body } = require('express-validator');
const db = require('../database/models');


const controller = {
   index: function (req, res){
      db.Usuario.findAll({
         include:[{association: "productos"}]
      })
         .then( (productos) => {
            res.send(productos)
         })
      return res.render('products/index');


   },
   login: async function (req, res){
      return res.render('users/login');
   },
   processLogin: function(req, res){
      let errors = validationResult(req);

      if(errors.isEmpty()){
         let usersJSON = fs.readFileSync(usersFilePath, {encoding:'utf8'})
         let users;
         if(usersJSON == "") {
            users = [];
         } else {
            users = JSON.parse(usersJSON);
         }
         for (let i = 0; i < users.length; i++){
            if(users[i].email == req.body.email){
               if(bcrypt.compareSync(req.body.password, users[i].password)){
                  let usuarioALoguearse = users[i];
                  break;
               }
            }
         }
         if(usuarioALoguearse == undefined){
            return res.render('users/login', {errors: [
               {msg: 'Credenciales invalidas'}
            ]});
         }
         req.session.usuarioLogueado = usuarioALoguearse;
         res.render('Succes!')
      }else{   
         return res.render('users/login', {errors: errors.errors});
      }
   },
   register: function (req, res){
      return res.render('users/register');
   },
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

      let avatar
		if(req.body.avatar != undefined){
			avatar = req.body.avatar
		} else {
			avatar = 'stands-img.webp'
		}
      let newUser = {
			id: users[users.length - 1].id + 1,
			...req.body,
         avatar: avatar
		};

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
      users.push(newUser)
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
		res.render('users/usuarioExito');
	},

   profile: function (req, res){
      return res.render('users/userProfile')
   },

   cart: function (req, res){
      return res.render('products/product-cart');
   },
}

module.exports = controller