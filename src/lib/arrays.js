const getNthElement = (index, array) => {
  const newIndex = index < array.length ? index : index - array.length;
  return array[newIndex];
};

const arrayToCSVString = (array) => {
  const csvArray = array.toString();
  return csvArray;
};

const csvStringToArray = (string) => {
  const array = string.split(',');
  return array;
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  if (element !== '') {
    const array2 = array.concat(element);
    return array2;
  }
  return array;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  const toUpperCase = (lowerCaseString) => lowerCaseString.toUpperCase();
  return strings.map(toUpperCase);
};

const reverseWordsInArray = (strings) => {
  const reversedStrings = [];
  for (let i = 0; i < strings.length; i++) {
    const currentString = strings[i];
    let reverseString = '';
    for (let j = currentString.length - 1; j >= 0; j--) {
      reverseString += currentString[j];
    }
    reversedStrings.push(reverseString);
  }
  return reversedStrings;
};

const onlyEven = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter((element) => {
    const lowerString = element.toLowerCase();
    return lowerString[0] === 'a' || lowerString[0] === 'e' || lowerString[0] === 'i' || lowerString[0] === 'o' || lowerString[0] === 'u';
  });
};

const removeSpaces = (string) => {
  return string.replace(/\s/g, '');
};

const sumNumbers = (numbers) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
};

const sortByLastLetter = (strings) => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
