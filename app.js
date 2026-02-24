const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_f1teams = require('./routes/f1Teams.routes');
app.use('/teams', rutas_f1teams);

const rutas_f1drivers = require('./routes/f1Drivers.routes');
app.use('/drivers', rutas_f1drivers);

app.use((request, response, next) => {
    response.status(404).send("La ruta no existe");
})

app.listen(3000);