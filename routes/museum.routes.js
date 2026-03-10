const express = require('express');
const router = express.Router();

const museumController = require('../controllers/museum.controller');
const isAuth = require('../util/is-auth');
const puedeCrear = require('../util/puede_crear');
const puedeVer = require('../util/puede_ver');

router.get('/', isAuth, puedeVer, museumController.get_museum);
router.get('/add', isAuth, puedeCrear, museumController.get_add);
router.post('/add', isAuth, puedeCrear, museumController.post_add);

module.exports = router;