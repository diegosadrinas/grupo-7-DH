const { body } = require('express-validator');
const path = require('path')

const validationsCreate = [
    body("name")
    .notEmpty().withMessage('Tienes que escribir un nombre').bail()
    .isLength({min:5}).withMessage('Debe terner al menos 5 caracteres'),
    body('description')
    .notEmpty().withMessage('Debes ingresar una descripción').bail()
    .isLength({min:20}).withMessage('Debe terner al menos 20 caracteres'),
    body('price')
    .notEmpty().withMessage('Debes ingresar un valor'),
    // body('image').custom((value, { req }) => {
    //     let file = req.files;
    //     let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
    //     if (!file) {
    //         throw new Error ('Debes subir una imagen');
    //     } else {
    //         let fileExtension = path.extname(file.originalname);
    //         console.log(fileExtension);
    //         if (!acceptedExtensions.includes(fileExtension)){
    //             throw new Error ('El arhivo debe ser JPG, JPEG, PNG o GIF')
    //         }
    //     }
    //     return true;
    // }),
    body('category').notEmpty().withMessage('Elegi una opcion'),
    body('color').notEmpty().withMessage('Elegi un color')
]

module.exports = validationsCreate