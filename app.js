const express = require('express');
const app = express();

const qrcode = require('qrcode-terminal');
const os = require('os');

const PORT = 3000;

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

    const url = `http://${ipLocal}:${PORT}/main`;

    qrcode.generate(url, {small: true});
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_f1teams = require('./routes/f1Teams.routes');
app.use('/teams', rutas_f1teams);

const rutas_f1drivers = require('./routes/f1Drivers.routes');
app.use('/drivers', rutas_f1drivers);

const rutas_f1quiz = require('./routes/f1Quiz.routes');
app.use('/quiz', rutas_f1quiz);

const rutas_f1main = require('./routes/f1main.routes');
app.use('/main', rutas_f1main);

app.use((request, response, next) => {
    response.status(404).send("La ruta no existe");
})

//TO-DO si puedo agregar algo de que las paginas sean /main/drivers en lugar de solo /drivers o /teams

app.listen(3000); 