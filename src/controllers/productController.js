const path = require('path');
const fs = require('fs');

const productsFilePath= path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
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
   },

   cart: (req, res) => {
      res.render('products/product-cart')
   },

   store: (req, res) => {
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'stands-img.webp'
		}		
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};

		// Acá entra la logica de Sequelize y se borra JSON
      products.push(newProduct)
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
		res.redirect('/products');
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