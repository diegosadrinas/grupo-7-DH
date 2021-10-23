const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/productCart', productController.productCart);
router.get('/productDetail', productController.productDetail);
router.get('/creacionProductos', productController.creacionProductos);
router.get('/detalle/:id', productController.detalle);



module.exports = router;