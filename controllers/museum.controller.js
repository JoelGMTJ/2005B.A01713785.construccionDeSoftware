const Moments = require('../models/momentos.model');
const momentos = require('../models/momentos.model')

exports.get_museum = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('museum', {
        momentos :listaMomentos,
        username: request.session.username || '',
    });
});

exports.get_add = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('nuevoMomento', {
        momentos :listaMomentos,
        username: request.session.username || '',
    });
});

exports.post_add = ((request, response, next) => {
    const momento = new Moments(request.body.nombreMomento,
        request.body.temporada, request.body.lugar, request.body.videoLink, request.body.imageLink
    );
    momento.save();
    response.redirect('/museum');
});