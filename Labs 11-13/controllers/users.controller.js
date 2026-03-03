exports.get_login = (request, response, next) => {
    response.render('login');
};

exports.post_login= (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/drivers');
};

exports.get_logout = (request, response, next) => {};

exports.get_signup = (request, response, next) => {};
    
exports.post_signup = (request, response, next) => {};