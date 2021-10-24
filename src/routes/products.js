const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/', productController.store);

router.get('/:id', productController.detail);

router.get('/:id/edit', productController.edit);
router.patch('/:id/edit', productController.update);

router.delete('/products/:id', productController.delete);


// RUTAS DE TESTEO DE VISTAS - BORRAR DESPUES
router.get('/productCart', productController.productCart);
router.get('/productDetail', productController.productDetail);
router.get('/creacionProductos', productController.creacionProductos);
router.get('/detalle/:id', productController.detalle);



module.exports = router;