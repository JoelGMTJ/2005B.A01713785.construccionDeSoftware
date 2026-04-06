const momentos = require('../models/momentos.model');

exports.get_museum = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll().then(([rows, fieldData]) => {
        response.render('museum', {
            permisos: request.session.permisos || [],
            csrfToken: request.csrfToken(),
            momentos :rows,
            username: request.session.username || '',
        });
    }).catch((error) => {next(error)});
});

exports.get_add = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('nuevoMomento', {
        edit: false,
        csrfToken: request.csrfToken(),
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

exports.get_edit = (request, response, next) => {
    momentos.fetchOne(request.params.momentoId).then(([rows, fieldData]) => {
        response.render('nuevoMomento', {
            edit: true,
            momento: rows[0],
            csrfToken: request.csrfToken(),
            username: request.session.username || '',
        });
    }).catch((error) => {next(error)});
};

exports.post_edit = (request, response, next) => {
    momentos.edit(request.params.momentoId, request.body.nombreMomento,
        request.body.temporada, request.body.lugar, request.body.videoLink, request.body.imageLink
    ).then(() => {
        return response.redirect('/museum');
    }).catch((error) => {next(error)});
};

exports.get_buscar = (request, response, next) => {
    response.status(200).json({message: "Respuesta asíncrona"});
    // momentos.buscar(request.params.buscar).then(([momentos, fieldData]) => {
    //     return response.status(200).json({momentos: momentos});
    // }).catch((error) => {
    //     return response.status(500).json({message: error.stack()});
    // });
};