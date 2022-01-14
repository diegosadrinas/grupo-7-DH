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
	body('first_name').notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isLength({min:2}).withMessage('Debe tener minimo 2 caracteres'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un apellido').bail()
	.isLength({min:2}).withMessage('Debe tener minimo 2 caracteres'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
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

// Login - guardar usuario Loguead

// router.post('/login',[
// 	body('email').isEmail().withMessage('Email Invalido'),
// 	body('password').isLength({min: 8}).withMessage('El pass debe tener como minimo 8 caracteres')
// ], mainController.processLogin);

// Loguin !

router.post('/login', mainController.loginProcess)

router.get('/check', function(req, res){
	if(req.session.usuarioLogueado == undefined){
		res.send('No esas Logueado');
	}else{
		res.send('El usuario Logueado es ' + req.session.usuarioLogueado.email)
	}
})


router.get('/register', mainController.register);
router.post('/register', 
			validations,
			uploadFile.any(), mainController.processRegister)

router.get('/product-cart', mainController.cart);

// PERFIL DE UN USUARIO - CREAR VISTA - COPIAR DETALLE PRODUCTO Y MODIFICAR
router.get('/profile/:userId', mainController.profile);

// Prueba Session - Contador Visita
router.get('/contador', function(req, res){
	if(req.session.numeroVisitas == undefined){
		req.session.numeroVisitas = 0;
	}
		req.session.numeroVisitas++;

	res.send('El contador esta en el número: ' + req.session.numeroVisitas);
});




module.exports = router;