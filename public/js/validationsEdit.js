const { body } = require('express-validator');

const validationsEdit = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({ min:5 }).withMessage('Debe terner al menos 5 caracteres'),
    body('description').notEmpty().withMessage('Debes ingresar una descripción').bail().isLength({ min:20 }).withMessage('Debe terner al menos 5 caracteres')
    // VALIDAR IMAGEN! (JPG, JPEG, PNG, GIF)
];

module.exports = validationsEdit