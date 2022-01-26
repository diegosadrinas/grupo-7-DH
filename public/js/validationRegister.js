const { body } = require('express-validator');

const validationsRegister = [
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
		// NO PUEDE REPETIRSE CON OTRO EMAIL ! EN CONTROLADOR HAY ALGO DE ESO!
	body('first_name').notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isLength({min:2}).withMessage('Debe tener minimo 2 caracteres'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un apellido').bail()
	.isLength({min:2}).withMessage('Debe tener minimo 2 caracteres'),
    body("password").notEmpty().withMessage('Tienes que escribir una contraseña').isLength({min:8}).withMessage("Debe terner minimo 8 caracteres")
	// VALIDAR IMAGEN! (JPG, JPEG, PNG, GIF)

]
module.exports = validationsRegister