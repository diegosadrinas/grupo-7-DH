const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer')

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
// 

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/', upload.any(),  productController.store);

router.get('/:id', productController.detail)    ;

router.get('/:id/edit', productController.edit);
router.patch('/:id/edit', upload.any(), productController.update);

router.delete('/products/:id', productController.delete)

// RUTAS DE TESTEO DE VISTAS - BORRAR DESPUES



module.exports = router;