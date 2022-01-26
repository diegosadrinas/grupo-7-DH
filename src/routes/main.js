const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');

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
const validationsRegister = require('../../public/js/validationRegister')
const validationLogin = require('../../public/js/validationLogin')

// Rutas
router.get('/', mainController.index);
router.get('/login', guestMiddleware, mainController.login);
router.post('/login', validationLogin, mainController.loginProcess)
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