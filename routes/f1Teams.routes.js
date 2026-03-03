const express = require('express');
const router = express.Router();

const teams = require('../models/equipos.model')

router.use((request, response, next) => {
    const listaEquipos = teams.fetchAll();
    response.render('teams', {teams: listaEquipos}); 
    next();
});

module.exports = router;