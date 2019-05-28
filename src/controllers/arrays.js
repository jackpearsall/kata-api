const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('../lib/arrays');

exports.getNthElement = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
};

exports.arrayToCSVString = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

exports.addToArray = (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
};

exports.elementsStartingWithAVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

exports.removeNthElement = (req, res) => {
  res.status(200).send({ result: removeNthElement(req.query.index, req.body.array) });
};
