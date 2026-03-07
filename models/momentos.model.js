const db = require('../util/database.js');

module.exports = class Moments {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_name, mi_season, mi_location, mi_videoLink, mi_image) {
        this.name = mi_name;
        this.season = mi_season;
        this.location = mi_location;
        this.videoLink = mi_videoLink;
        this.image = mi_image;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO momentos(name, season, location, videoLink, image) values (?, ?, ?, ?, ?)', 
            [this.name, this.season, this.location, this.videoLink, this.image]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM momentos');
    }

}