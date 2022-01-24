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
const { body } = require('express-validator');

// Validaciones
const validactionsCreate = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({ min:5 }).withMessage('Debe terner al menos 5 caracteres'),
    body('description').notEmpty().withMessage('Debes ingresar una descripción').bail().isLength({ min:20 }).withMessage('Debe terner al menos 5 caracteres')
    // VALIDAR IMAGEN! (JPG, JPEG, PNG, GIF)
];

const validationsEdit = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({ min:5 }).withMessage('Debe terner al menos 5 caracteres'),
    body('description').notEmpty().withMessage('Debes ingresar una descripción').bail().isLength({ min:20 }).withMessage('Debe terner al menos 5 caracteres')
    // VALIDAR IMAGEN! (JPG, JPEG, PNG, GIF)

];

// Rutas
router.get('/', productController.index);

// Test Form Post
router.get('/test-form', productController.test)
router.post('/test-form', productController.testPost)
// FIN

router.get('/create', 
adminMiddle, adminMiddle2, 
validactionsCreate, productController.create);
router.post('/create', upload.any(), productController.store);
router.get('/product-cart', productController.cart);
router.get('/:id', productController.detail);
router.get('/edit/:id',
 adminMiddle, adminMiddle2, 
 validationsEdit, productController.edit);
router.patch('/edit/:id', upload.any(), productController.update);
router.delete('/delete/:id', productController.delete)

module.exports = router;