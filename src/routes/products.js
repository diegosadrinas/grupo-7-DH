const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')

// MULTER
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

// FUNCIONAN
router.get('/', productController.index);
router.get('/:id', productController.detail);
router.get('/edit/:id', productController.edit);
router.patch('/edit/:id', upload.any(), productController.update);


// DEJATON DE FUNCIONAR
router.get('/create', productController.create);
router.post('/create', upload.any(),  productController.store);

router.get('/product-cart', productController.cart);

router.delete('/delete/:id', productController.delete)

module.exports = router;