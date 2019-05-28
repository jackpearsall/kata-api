const express = require('express');
const objectsController = require('../controllers/objects');

const router = express.Router();

router.post('/create-person', objectsController.createPerson);
router.post('/has-property', objectsController.hasProperty);
router.post('/find-hondas', objectsController.findHondas);
router.post('/average-age', objectsController.averageAge);


module.exports = router;
