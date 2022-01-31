const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')


// Multer
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

//Middlewares
const adminMiddle = require('../../middlewares/adminMiddle')
const adminMiddle2 = require('../../middlewares/adminMiddle2');

// Validaciones
const validationsCreate = require('../../public/js/validationsCreate')
const validationsEdit = require('../../public/js/validationsEdit')

// Rutas
router.get('/', productController.index);
router.get('/create', adminMiddle, adminMiddle2, productController.create);
router.post('/create', upload.any(), validationsCreate, productController.store);
router.get('/product-cart', productController.cart);
router.get('/:id', productController.detail);
router.get('/edit/:id', adminMiddle, adminMiddle2,  productController.edit);
router.patch('/edit/:id', upload.any(), validationsEdit , productController.update);
router.delete('/delete/:id', productController.delete)

module.exports = router;