const express = require('express');
const app = express();

const qrcode = require('qrcode-terminal');
const os = require('os');

const PORT = 3000;
const localMainPage = ('http://localhost:3000/museum')

//Algo que chatgpt me dio para crear un codigo qr y verlo desde mi telefono
app.listen(PORT, '0.0.0.0', () => {
    // Lógica para obtener tu IP Local automáticamente
    const interfaces = os.networkInterfaces();
    let ipLocal = '';

    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            // Buscamos la IPv4 que no sea la interna (127.0.0.1)
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                ipLocal = alias.address;
            }
        }
    }

    const url = `http://${ipLocal}:${PORT}`;

    qrcode.generate(url, {small: true});
    // console.log(url);
    console.log(localMainPage)
});

//Especifico que voy a usar ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');

app.use(session({
    secret: 'tu_clave_secreta',
    resave: false,
    saveUninitialized: false,
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_museum = require('./routes/museum.routes');
app.use('/museum', rutas_museum);
const rutas_users= require('./routes/users.routes');
app.use('/users', rutas_users);

app.use((error, request, response, next) => {
    response.status(500).send(`Error interno del servidor: ${error.stack}`);
});

app.use((request, response, next) => {
    response.status(404).send("La ruta no existe");
})