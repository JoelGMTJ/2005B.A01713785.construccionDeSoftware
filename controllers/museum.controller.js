const momentos = require('../models/momentos.model')

exports.get_museum = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('museum', {momentos :listaMomentos});
});

exports.get_add = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('museum', {momentos :listaMomentos});
});

exports.post_add = ((request, response, next) => {
    const listaMomentos = momentos.fetchAll();
    response.render('museum', {momentos :listaMomentos});
});