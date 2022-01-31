const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const mainController = require('../controllers/mainController')

router.get('/users', mainController.list);

module.exports = router;