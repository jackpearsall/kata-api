const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');
const booleansRouter = require('./routes/booleans');
const arraysRouter = require('./routes/arrays');
const objectsRouter = require('./routes/objects');
const logging = require('./middlewares/logging');

const app = express();

app.use(express.json());
app.use(logging);

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.use('/booleans', booleansRouter);

app.use('/arrays', arraysRouter);

app.use('/objects', objectsRouter);

module.exports = app;
