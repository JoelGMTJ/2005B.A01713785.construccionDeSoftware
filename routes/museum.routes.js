const express = require('express');
const router = express.Router();

const museumController = require('../controllers/museum.controller');

router.get('/', museumController.get_museum);
router.get('/add', museumController.get_add);
router.post('/add', museumController.post_add);

// router.get('/add', personajesController.get_add);
// router.get('/nuevo', personajesController.get_add);
// router.post('/new', personajesController.post_add);
// router.get('/old', personajesController.get_old);
// router.use(personajesController.get_list);

module.exports = router;