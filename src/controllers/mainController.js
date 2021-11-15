const path = require('path');

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
		
		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		return res.send('Ok, las validaciones se pasaron y no tienes errores');
	},

   profile: function (req, res){
      return res.render('users/userProfile')
   },

   cart: function (req, res){
      return res.render('products/product-cart');
   },
}

module.exports = controller