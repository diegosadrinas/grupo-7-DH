const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const products = []

const controller = {
<<<<<<< HEAD
   index: (req, res) => {
      res.render('products/all-products', {products})
   },


	//    TESTINGS !

   test: (req, res)=>{
	  res.render('products/testForm')
   },
   testPost: (req, res) => {
	   let data = req.body
	   console.log(data);
	   res.send(data)
   },
	// FIN


   create: (req, res) => {
      res.render('products/product-create-form')
=======
	index: function (req, res){

		db.Producto.findAll({
		})
		   .then( (products) => {
			  return res.render('products/all-products', {products});
		   })
		   .catch(function(err){
  
			  console.log("Error:" + String(err));
		  
		  });
	 },
   
	create: (req, res) => {
		res.render('products/product-create-form')
>>>>>>> 776078f8ea55a432eab24da884ebb9ac581c58aa
   },

	cart: (req, res) => {
	   res.render('products/product-cart')
   },

	store: (req, res) => {
	   console.log("entré a store")
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'stands-img.webp'
		}

		console.log(image, category, colors)
		
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
					res.render('/products')
			})

			.catch(function(err){

				console.log("Error:" + String(err));		
			})	
   },

	detail: (req, res) => {
		let product_id = req.params.id
		let product = products.find(product => product.id == product_id)
		res.render('products/product-detail', {product});
   },

	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('products/product-to-edit', { product: productToEdit })
   },

   update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image = "desktop-img.webp"

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		// Acá se modifica para insertar el sequelize
		
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},


	// Delete - Delete one product from DB

	// Acá se inserta el sequelize
	delete : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}

module.exports = controller