const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator')

// const User = require('../models/User.js');

const controller = {
   index: function (req, res){
      return res.render('products/index');
   },
   login: function (req, res){
      return res.render('users/login');
   },
   
   register: function (req, res){
      return res.render('users/register');
   },

	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
      let newUser = {
			id: users[users.length - 1].id + 1,
			...req.body
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