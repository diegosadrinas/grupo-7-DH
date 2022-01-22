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

//MIDDLEWARES

// adminMiddel: si no estas logueado cono Admin no podes ir ir a la ruta edir por ej.. no me funca
const adminMiddle = require('../../middlewares/adminMiddle')
const adminMiddle2 = require('../../middlewares/adminMiddle2')

// FUNCIONAN
router.get('/', productController.index);
router.get('/test', productController.test);
router.get('/create', productController.create);
router.post('/create', upload.any(), productController.store);
router.get('/product-cart', productController.cart);
router.get('/:id', productController.detail);
router.get('/edit/:id', adminMiddle, adminMiddle2, productController.edit);
router.patch('/edit/:id', upload.any(), productController.update);
router.delete('/delete/:id', productController.delete)

module.exports = router;