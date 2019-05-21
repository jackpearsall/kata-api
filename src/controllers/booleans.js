const {
  negate,
  truthiness,
  isOdd,
  startsWith,
} = require('../lib/booleans');

exports.negate = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

exports.isOdd = (req, res) => {
  const number = req.params.number;
  if (isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(number) });
  }
};

exports.startsWith = (req, res) => {
  const string = req.params.string;
  const character = req.params.character;
  if (character.length !== 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(character, string) });
  }
};
