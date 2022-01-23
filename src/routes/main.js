const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const { body } = require('express-validator');

// Multer
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/avatars')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadFile = multer({storage: storage})


// MiddleWares
const guestMiddleware = require('../../middlewares/guestMiddleware')
const authMiddleware = require('../../middlewares/authMiddleware')

const mainController = require('../controllers/mainController');

// Validaciomes
const validationsRegister = [
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('first_name').notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isLength({min:2}).withMessage('Debe tener minimo 2 caracteres'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un apellido').bail()
	.isLength({min:2}).withMessage('Debe tener minimo 2 caracteres'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
];
const validationLogin = [
	body("email").isEmail().withMessage("Email incorrecto"),
    body("password").isLength({min:8}).withMessage("Contraseña demasiado corta")
]

// Rutas
router.get('/', mainController.index);
router.get('/login',validationLogin, guestMiddleware, mainController.login);
router.post('/login', mainController.loginProcess)
router.get('/register', guestMiddleware, mainController.register);
router.post('/register', validationsRegister, mainController.processRegister)
router.get('/profile', authMiddleware, mainController.profile);
router.get('/logout', mainController.logout);

// Prueba Session - Contador Visita
router.get('/contador', function(req, res){
	if(req.session.numeroVisitas == undefined){
		req.session.numeroVisitas = 0;
	}
		req.session.numeroVisitas++;

	res.send('El contador esta en el número: ' + req.session.numeroVisitas);
});


module.exports = router;