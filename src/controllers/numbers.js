const {
  add,
  subtract,
  multiply,
  divide,
  remainder,
} = require('../lib/numbers');

exports.add = (req, res) => {
  const { a, b } = req.params;
  if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(parseInt(a), parseInt(b)) });
  }
};

exports.subtract = (req, res) => {
  const { a, b } = req.params;
  if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(parseInt(b), parseInt(a)) });
  }
};

exports.multiply = (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
};

exports.divide = (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
};

exports.remainder = (req, res) => {
  if (req.query.a && req.query.a) {
    const { a, b } = req.query;
    res.status(200).json({ result: remainder(a, b) });
  } else {
    const { a, b } = req.body;
    if (a === undefined || b === undefined) {
      res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    } else if (isNaN(a) || isNaN(b)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' });
    } else if (b === 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    } else {
      res.status(200).json({ result: remainder(a, b) });
    }
  }
};
