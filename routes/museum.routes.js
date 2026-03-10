const express = require('express');
const router = express.Router();

const museumController = require('../controllers/museum.controller');
const isAuth = require('../util/is-auth');

router.get('/', isAuth, museumController.get_museum);
router.get('/add', isAuth, museumController.get_add);
router.post('/add', isAuth, museumController.post_add);

// router.get('/add', personajesController.get_add);
// router.get('/nuevo', personajesController.get_add);
// router.post('/new', personajesController.post_add);
// router.get('/old', personajesController.get_old);
// router.use(personajesController.get_list);

module.exports = router;