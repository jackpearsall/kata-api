const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
  add,
  subtract,
} = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  if (isNaN(req.params.a) && isNaN(req.params.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(parseInt(req.params.a), parseInt(req.params.b)) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  if (isNaN(req.params.a) && isNaN(req.params.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(parseInt(req.params.b), parseInt(req.params.a)) });
  }
});

module.exports = app;
