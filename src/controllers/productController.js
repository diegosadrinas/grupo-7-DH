const path = require('path');
const fs = require('fs');

const productsFilePath= path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// console.log(products.length);
const controller = {
   index: (req, res) => {
      console.log("esta mandando a index de products")
      res.render('products/all-products', {products})
   },

   create: (req, res) => {
      res.render('products/product-create-form')
   },

   store: (req, res) => {
      let image = "sample_image_from_post.jpg"
      let newProduct = {
         id: products[products.length - 1].id + 1,
			...req.body,
			image: image
      }
      console.log("Intentando postear")
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
		let image = "sample_image_from_put.jpg"

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

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},


   delete: (req, res) => {

   },

 

   // URLs PARA TESTEO. DESPUES SE VAN
   productCart: function (req, res){
      res.render('products/product-cart');
   },
   productDetail: function (req, res){
      return res.render('products/product-detail');
   },
   creacionProductos: function (req, res){
      return res.render('products/product-create-form');
   },
   detalle: function (req, res){
      return res.render('/products/productDetail');
   },
}

module.exports = controller