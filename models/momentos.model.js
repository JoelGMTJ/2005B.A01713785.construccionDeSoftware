const db = require('../util/database.js');

module.exports = class Moments {

    static _driversColorColumnPromise = null;

    static hasDriversColorColumn() {
        if (!Moments._driversColorColumnPromise) {
            Moments._driversColorColumnPromise = db.execute("SHOW COLUMNS FROM drivers LIKE 'color'")
                .then(([rows]) => rows.length > 0)
                .catch(() => false);
        }
        return Moments._driversColorColumnPromise;
    }

    static getDriverColorSelect(hasColorColumn) {
        return hasColorColumn ? 'd.color AS driverColor' : 'NULL AS driverColor';
    }

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

    static fetchOne(id) {
        return db.execute('SELECT * FROM momentos WHERE momentoid = ?', [id]);
    }

    static edit(id, name, season, place, videoLink, img) {
        return db.execute(
            "UPDATE momentos SET name=?, season=?, location=?, image=?, videoLink=? WHERE momentoid=?", 
            [name, season, place, img, videoLink, id]
        );
    }

    static fetchDriverPopularity() {
        return Moments.hasDriversColorColumn().then((hasColorColumn) => {
            const colorSelect = Moments.getDriverColorSelect(hasColorColumn);
            return db.execute(`
                SELECT d.name, ${colorSelect}, COUNT(*) AS total
                FROM driver_moment dm
                INNER JOIN drivers d ON d.driver_id = dm.driver_id
                GROUP BY d.driver_id, d.name${hasColorColumn ? ', d.color' : ''}
                ORDER BY total DESC, d.name ASC
            `);
        });
    }

    static buscar(busqueda) {
        const patron = `%${busqueda}%`;
        return db.execute(`
            SELECT momentoid, name, season, location, videoLink, image, createdAt
            FROM momentos
            WHERE name LIKE ?
            OR season LIKE ?
            OR location LIKE ?
            `, [patron, patron, patron]);
    }

    static buscarPopularidadPilotos(busqueda) {
        const patron = `%${busqueda}%`;
        return Moments.hasDriversColorColumn().then((hasColorColumn) => {
            const colorSelect = Moments.getDriverColorSelect(hasColorColumn);
            return db.execute(`
                SELECT d.name, ${colorSelect}, COUNT(*) AS total
                FROM driver_moment dm
                INNER JOIN drivers d ON d.driver_id = dm.driver_id
                INNER JOIN momentos m ON m.momentoId = dm.momentoId
                WHERE m.name LIKE ?
                OR m.season LIKE ?
                OR m.location LIKE ?
                GROUP BY d.driver_id, d.name${hasColorColumn ? ', d.color' : ''}
                ORDER BY total DESC, d.name ASC
            `, [patron, patron, patron]);
        });
    }

}