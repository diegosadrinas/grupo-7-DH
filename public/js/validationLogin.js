const { body } = require('express-validator');

const validationLogin = [
	body("email").isEmail().withMessage("Email incorrecto"),
	//DEBERA EXISITER EN LA BASE !
    body("password").notEmpty().withMessage('Tienes que escribir una contraseña').isLength({min:8}).withMessage("Debe terner minimo 8 caracteres")
	// DEBERA COINCIDIR CON LA BASE ! 
]

module.exports = validationLogin