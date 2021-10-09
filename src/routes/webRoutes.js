const express = require('express');
const router = express.Router();
const webController = require('../controllers/webControllers');


router.get('/', webController.index);
router.get('/login', webController.login);
router.get('/register', webController.register);
router.get('/productCart', webController.productCart);
router.get('/productDetail', webController.productDetail);
router.get('/creacionProdcutos', webController.creacionProductos);
router.get('/detalle/:id', webController.detalle);



module.exports = router;