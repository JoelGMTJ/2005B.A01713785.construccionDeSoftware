const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
    response.render('main'); //Manda la respuesta
});

module.exports = router;