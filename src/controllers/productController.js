const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../database/models');

const controller = {
	index: function (req, res){
		db.Producto.findAll({
		})
		   .then( (products) => {
			  return res.render('products/all-products', {products: products});
		   })
		   .catch(function(err){
  
			  console.log("Error en index:" + String(err));
		  
		  });
	 },
   
	create: (req, res) => {
		res.render('products/product-create-formTest')
   },

	cart: (req, res) => {
	   res.render('products/product-cart')
   },

	store: (req, res) => {
		
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
				
			return res.render('products/product-create-formTest', {
					errors: resultValidation.mapped(),
					oldData: req.body
				})
		};

		let image
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'laptop-stand.jpeg'
		}
	
		db.Producto.create({
			name: req.body.name,
			description: req.body.description,
			img_url: image,
			color: req.body.color,
			price: req.body.price,
			category: req.body.category
		})
			.then(() =>
				{
					db.Producto.findAll({
					})
					   .then( (products) => {
						  return res.render('products/all-products', {products});
					   })
					   .catch(function(err){
			  
						  console.log("Error en index:" + String(err));
					  
					  });
			})

			.catch(function(err){

				console.log("Error en Store:" + String(err));		
			})	
   },

	detail: (req, res) => {
		let product_id = req.params.id
		db.Producto.findByPk(product_id)
			.then((product => {
				res.render('products/product-detail', {product});
			}))
			.catch((err) => {
				console.log("Error en detail:" + String(err));	
			})
		
   },

	edit: (req, res) => {
		let product_id = req.params.id
		db.Producto.findByPk(product_id)
			.then((product => {
				res.render('products/product-to-edit', { product })
			}))
			.catch((err) => {
				console.log("Error en detail:" + String(err));	
			})
		
   },

   update: (req, res) => {
	let product_id = req.params.id

	db.Producto.findByPk(product_id)
		.then((product => {
			let image
			if(req.files[0] != undefined){
				image = req.files[0].filename
			} else {
				image = product.img_url
			}
			product.update({
				name: req.body.name,
				description: req.body.description,
				img_url: image,
				color: req.body.color,
				price: req.body.price,
				category: req.body.category
			})
				.then((product) => {
					res.render('products/product-to-edit', { product })
				})

		}))
		.catch((err) => {
			console.log("Error en detail:" + String(err));	
		})
	
},
	delete : (req, res) => {
		db.Producto.destroy({
			where: {
				product_id: req.params.id
			}
		})
			.then(
				res.redirect('/products')
			)
			
			.catch((err) => {
				console.log("Error en delete:" + String(err));	
			})		
   },

   list: function (req, res){
	db.Producto.findAll({
	})
	   .then( (product) => {
		  return res.json(product);
	   })
	   .catch(function(err){

		  console.log("Error en productController.list:" + String(err));
	  
	  });
   },

   listById: function(req, res) {
	   let product_id = req.params.id
	   db.Producto.findByPk(product_id)
	   .then((product) => {
		   return res.json(product)
	   })
	   .catch(function(err){

		console.log("Error en productController.list:" + String(err));
	
	});
   }
}

module.exports = controller