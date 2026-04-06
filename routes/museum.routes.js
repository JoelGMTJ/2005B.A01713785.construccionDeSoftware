const express = require('express');
const router = express.Router();

const museumController = require('../controllers/museum.controller');
const isAuth = require('../util/is-auth');
const puedeCrear = require('../util/puede_crear');
const puedeVer = require('../util/puede_ver');

router.get('/buscar/:buscar', museumController.get_buscar);
router.get('/add', isAuth, puedeCrear, museumController.get_add);
router.post('/add', isAuth, puedeCrear, museumController.post_add);
router.get('/:momentoId/edit', isAuth, puedeCrear, museumController.get_edit);
router.post('/:momentoId/edit', isAuth, puedeCrear, museumController.post_edit);
router.use('/:momentoId', isAuth, puedeVer, museumController.get_museum);
router.use(isAuth, puedeVer, museumController.get_museum);

module.exports = router;