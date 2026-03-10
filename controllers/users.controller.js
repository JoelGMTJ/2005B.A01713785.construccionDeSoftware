const User = require("../models/user.model");
const bcrypt = require('bcrypt');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
    });
};

exports.post_login= (request, response, next) => {
    User.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if (rows.length > 0) {
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    return request.session.save(() => {
                        return response.redirect('/museum');
                    }); 
                } else {

                    return response.redirect('/users/login');
                }
            }).catch((error) => {
                console.log(error);
                next(error);
            });
        } else {

            return response.redirect('/users/login');
        }
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};