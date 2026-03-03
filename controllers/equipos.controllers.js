const Equipos = require('../models/equipos.model');

exports.get_verstappen = (request, response, next) => {
    response.render('../views/verstappen'); //Manda la respuesta
};

exports.get_piastri = (request, response, next) => {
    response.render('../views/oscar'); //Manda la respuesta
};

//aqui agrego lo que pasa cuando entro a tal ruta /quiz

//en el archivo teams.routes agrego el require de este archivo