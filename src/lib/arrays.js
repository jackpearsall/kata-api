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
  function toUpperCase(lowerCaseString) {
    return lowerCaseString.toUpperCase();
  }
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
  // const evens = [];
  // return numbers.filter((element) => {
  //   if (element % 2 !== 0) {
  //     return (element[0]);
  //   }
  //   return evens;
  // });
  
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice(0, index).concat(array.slice(index + 1, array.length));
  return newArray;
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter((element) => {
    const lowerString = element.toLowerCase();
    return lowerString[0] === 'a' || lowerString[0] === 'e' || lowerString[0] === 'i' || lowerString[0] === 'o' || lowerString[0] === 'u';
  });
};

const removeSpaces = (string) => {
  const noSpaceString = string.replace(/\s/g, '');
  return noSpaceString;
};

const sumNumbers = (numbers) => {
  function getSum(a, b) {
    return a + b;
  }
  return numbers.reduce(getSum);
};

const sortByLastLetter = (strings) => {
  const reversedStrings = [];
  for (let i = 0; i < strings.length; i++) {
    const currentString = strings[i];
    let reverseString = '';
    for (let j = currentString.length - 1; j >= 0; j--) {
      reverseString += currentString[j];
    }
    reversedStrings.push(reverseString);
  } // Reversed the string to get last letter at the start

  reversedStrings.sort(); // Sort this string by this letter

  const reReversedStrings = [];
  for (let i = 0; i < reversedStrings.length; i++) {
    const currentString2 = reversedStrings[i];
    let reverseString2 = '';
    for (let j = currentString2.length - 1; j >= 0; j--) {
      reverseString2 += currentString2[j];
    }
    reReversedStrings.push(reverseString2);
  } // Reversed the revered string to get the original back but sorted by the last letter
  return reReversedStrings;
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
