const express = require('express');
const router = express.Router();
const productController = require('../../src/controllers/productController');
const mainController = require('../../src/controllers/mainController')

router.get('/users', mainController.list);
router.get('/users/:id', mainController.listById);

router.get('/products', productController.list)
router.get('/products/:id', productController.listById)

module.exports = router;