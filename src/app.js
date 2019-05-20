const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');


const {
  negate,
  truthiness,
  isOdd,
  startsWith,
} = require('./lib/booleans');

const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = req.params.number;
  if (isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(number) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const string = req.params.string;
  const character = req.params.character;
  if (character.length !== 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(character, string) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).send({ result: removeNthElement(req.query.index, req.body.array) });
});

module.exports = app;
