const express = require('express');
const router = express.Router();

const teams = require('../models/equipos.model')

const teamsController = require('../controllers/equipos.controllers');
//Necesito de agregar la variable que contenga el archivo el cual va a agregar una variable constante que agrege todo lo que exporte el archivo
//tomo la funciones que requieren unos / necesarios y se la agrego a el archivo equipos.controlles
//y necesito de agrega el archivo y le escribo la variable que contiene la funcion equipos.controllers.get_add (cualquier nombre que le quiera agregar)

router.post('/mv1', teamsController.get_verstappen);
router.post('/op81', teamsController.get_piastri);

//esto es lo que le manda A a donde se necesite llamado como B
//Osea que manda A (teams) a las partes que lo necesiten y lo manda como una
//variable B (teams)
router.use((request, response, next) => {
    const listaEquipos = teams.fetchAll();
    response.render('drivers', {teams: listaEquipos}); 
    next();
});

router.use((request, response, next) => {
    response.render('drivers.ejs');
});



module.exports = router;