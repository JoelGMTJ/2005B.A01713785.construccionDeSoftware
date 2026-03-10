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
                [this.username, this.name, password_cifrado]
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

    static getPermisos(username){
        return db.execute(`
            SELECT pri.nombre_privilegio 
            FROM privilegios pri, posee pos, roles r, tiene t
            WHERE t.user_id = ?
            AND pri.id = pos.priv_id
            AND pos.rol_id = r.id
            AND t.id_rol = r.id`, [username]
        );
    }

}