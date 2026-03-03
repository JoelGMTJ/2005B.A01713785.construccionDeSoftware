const express = require('express');
const router = express.Router();

const filesystem = require('fs');

router.get('/',(request, response, next) => {
    response.render('quiz'); //Manda la respuesta
});

router.post('/',(request, response, next) => {
    console.log(request.body);
    filesystem.writeFileSync("QuizF1.txt", JSON.stringify(request.body, null, 2));
    response.render('quiz'); //Manda la respuesta
});

module.exports = router;