const express = require('express');
const router = express.Router();

const path = require('path')
const multer = require('multer');

const { body } = require('express-validator');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

const mainController = require('../controllers/mainController');

const validations = [
	body('first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),,
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
];

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.post('/register', 
// uploadFile.single('avatar') ,validations, 
// esto serian las validaciones pero no se porque chota no funcionan
mainController.processRegister)
router.get('/product-cart', mainController.cart);

// PERFIL DE UN USUARIO - CREAR VISTA - COPIAR DETALLE PRODUCTO Y MODIFICAR
router.get('/profile/:userId', mainController.profile);


module.exports = router;