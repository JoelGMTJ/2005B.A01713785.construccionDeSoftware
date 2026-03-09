const db = require('../util/database.js');
const bcrypt = require('bcrypt');

module.exports = class User {

    //Hago el constructor a base de las cosas que va a tener mi sistema
    //Basarse en el codigo de el momentos.model.js 
    constructor(mi_username, mi_name, mi_password) {
        this.username = mi_username;
        this.name = mi_name;
        this.password = mi_password;
    }
    
    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                "INSERT INTO usuarios(username, name, password) VALUES (?, ?, ?)" ,
                [this.username, this.nombre, password_cifrado]
            );
        }).catch(
            (error) => {
            console.log(error);
            next(error);
        }
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(username) {
        return db.execute("SELECT * FROM usuarios WHERE username = ?", [username]);
    }

}

/*
Primero tengo que ajustar el controlador para que tenga la funcion de agregar un nuevo usuario
pasarle todos los datos que le lleguen desde la vista ejs para que le lleguen al model y cree el usuario
El valor que tiene el then dentro de la funcion anónima (password_cifrado) es el valor ya cifrado que nos regresa bcrypt
Hacemos un INSERT INTO en la base de datos con los datos que nos regreso de la cosa y el password_cifrado
*/