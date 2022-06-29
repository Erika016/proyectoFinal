const express = require('express');
const router = express.Router();
const controlador = require('../controllers/exercisesController');
const { verifyToken } = require("../lib/utils");


//Mostrar ejercicios
//Show exercises

router.get('/allExercises', verifyToken ,controlador.allExercises);

//Busqueda de ejercicios
// searchExercises

router.get('/searchExercises/:termino', verifyToken , controlador.searchExercises);

//Mostrar los pesos con ese usuario e id del ejercicio
//Show the weights with that user and exercise id

router.get('/searchWeight/:id_exercise/:id_User', verifyToken ,controlador.searchWeight);

//Eliminar un peso
//Remove a Weight

router.delete('/deleteWeight/:id_weith', verifyToken ,controlador.deleteWeight);

//Añadir peso
// add weight

router.post('/addWeight', verifyToken ,controlador. addWeight);


module.exports = router;