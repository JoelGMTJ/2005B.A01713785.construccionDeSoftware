const momentos = require('../models/momentos.model');

exports.get_museum = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll().then(([rows, fieldData]) => {
        response.render('museum', {
            momentos :rows,
            username: request.session.username || '',
        });
    }).catch((error) => {next(error)});
});

exports.get_add = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('nuevoMomento', {
        momentos :listaMomentos,
        username: request.session.username || '',
    });
});

exports.post_add = ((request, response, next) => {
    const momento = new momentos(request.body.nombreMomento,
        request.body.temporada, request.body.lugar, request.body.videoLink, request.body.imageLink
    );
    momento.save().then(() => {
        return response.redirect('/museum');
    }).catch((error) => {next(error)});
});