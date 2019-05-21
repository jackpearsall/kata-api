const express = require('express');
const arraysController = require('../controllers/arrays');


const router = express.Router();

router.post('/element-at-index/:index', arraysController.getNthElement);

router.post('/to-string', arraysController.arrayToCSVString);

router.post('/append', arraysController.addToArray);

router.post('/starts-with-vowel', arraysController.elementsStartingWithAVowel);

router.post('/remove-element', arraysController.removeNthElement);


module.exports = router;
