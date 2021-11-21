const express = require('express');
const router = express.Router();

const path = require('path')
const multer = require('multer');

const { body } = require('express-validator');

// MULTER
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/avatars')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadFile = multer({storage: storage})
// 

const mainController = require('../controllers/mainController');

const validations = [
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('avatar').custom((value, { req }) => {
		let file = req.body.avatar;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
];

// VALIDACION PARA EL LOGIN ! FALTA CODEAR LA VISTA ! 

// const validationLogin = [
// 	body("email").isEmail().withMessage("Email incorrecto"),
//     body("password").isLength({min:8}).withMessage("Contraseña demasiado corta")
// ]

router.get('/', mainController.index);
router.get('/login',
// validationLogin, 
mainController.login);
router.get('/register', mainController.register);
router.post('/register', validations,
uploadFile.any(),
// esto serian las validaciones pero no se porque chota no funcionan
mainController.processRegister)
router.get('/product-cart', mainController.cart);

// PERFIL DE UN USUARIO - CREAR VISTA - COPIAR DETALLE PRODUCTO Y MODIFICAR
router.get('/profile/:userId', mainController.profile);


module.exports = router;