const express = require('express');
const router = express.Router();
const controlador = require('../controllers/loginController');

// realizar el login

router.post('/login', controlador.login);
router.get('/protected', verifyToken, controlador.protected);


// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
if( typeof bearerHeader !== 'undefined'){
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
} else {
    res.sendStatus(403);
}
}

module.exports = router;