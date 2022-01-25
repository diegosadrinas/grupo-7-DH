const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')
const { body } = require('express-validator');


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
const validationsCreate = [
    body('name')
    .notEmpty().withMessage('Tienes que escribir un nombre').bail()
    .isLength({min:5}).withMessage('Debe terner al menos 5 caracteres'),
    body('description')
    .notEmpty().withMessage('Debes ingresar una descripción').bail()
    .isLength({min:20}).withMessage('Debe terner al menos 5 caracteres'),
    body('price')
    .notEmpty().withMessage('Debes ingresar un valor'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
        if (!file) {
            throw new Error ('Debes subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ('El arhivo debe ser JPG, JPEG, PNG o GIF')
            }
        }
        return true;
    }),
    body('category').notEmpty().withMessage('Elegi una opcion'),
    body('color').notEmpty().withMessage('Elegi un color')
]

const validationsEdit = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({ min:5 }).withMessage('Debe terner al menos 5 caracteres'),
    body('description').notEmpty().withMessage('Debes ingresar una descripción').bail().isLength({ min:20 }).withMessage('Debe terner al menos 5 caracteres')
    // VALIDAR IMAGEN! (JPG, JPEG, PNG, GIF)
];

// Rutas
router.get('/', productController.index);
router.get('/create', adminMiddle, adminMiddle2, productController.create);
router.post('/create', validationsCreate, upload.any(), productController.store);
router.get('/product-cart', productController.cart);
router.get('/:id', productController.detail);
router.get('/edit/:id', adminMiddle, adminMiddle2,  productController.edit);
router.patch('/edit/:id', upload.any(), validationsEdit , productController.update);
router.delete('/delete/:id', productController.delete)

module.exports = router;