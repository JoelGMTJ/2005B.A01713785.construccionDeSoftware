const momentos = require('../models/momentos.model');

exports.get_museum = ((request, response, next) => {
    Promise.all([
        momentos.fetchAll(),
        momentos.fetchDriverPopularity(),
    ]).then(([[momentRows], [pilotRows]]) => {
        response.render('museum', {
            permisos: request.session.permisos || [],
            csrfToken: request.csrfToken(),
            momentos: momentRows,
            pilotPopularity: pilotRows,
            username: request.session.username || '',
        });
    }).catch((error) => { next(error); });
});

exports.get_add = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('nuevoMomento', {
        edit: false,
        csrfToken: request.csrfToken(),
        momentos: listaMomentos,
        username: request.session.username || '',
    });
});

exports.post_add = ((request, response, next) => {
    const imageName = request.file ? request.file.filename : null;

    if (!imageName) {
        return response.status(400).send('Debes seleccionar una imagen para guardar el momento.');
    }

    const momento = new momentos(request.body.nombreMomento,
        request.body.temporada, request.body.lugar, request.body.videoLink, imageName
    );
    momento.save().then(() => {
        return response.redirect('/museum');
    }).catch((error) => { next(error); });
});

exports.get_edit = (request, response, next) => {
    momentos.fetchOne(request.params.momentoId).then(([rows, fieldData]) => {
        response.render('nuevoMomento', {
            edit: true,
            momento: rows[0],
            csrfToken: request.csrfToken(),
            username: request.session.username || '',
        });
    }).catch((error) => { next(error); });
};

exports.post_edit = (request, response, next) => {
    const imageName = request.file ? request.file.filename : request.body.currentImage;

    momentos.edit(request.params.momentoId, request.body.nombreMomento,
        request.body.temporada, request.body.lugar, request.body.videoLink, imageName
    ).then(() => {
        return response.redirect('/museum');
    }).catch((error) => { next(error); });
};

exports.get_buscar = (request, response, next) => {
    Promise.all([
        momentos.buscar(request.params.buscar),
        momentos.buscarPopularidadPilotos(request.params.buscar),
    ]).then(([[momentRows], [pilotRows]]) => {
        return response.status(200).json({
            momentos: momentRows,
            pilotPopularity: pilotRows,
        });
    }).catch((error) => {
        return response.status(500).json({ message: error.stack() });
    });
};