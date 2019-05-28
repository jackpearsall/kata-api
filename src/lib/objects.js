const createPerson = (name, age) => {
  return { name: name, age: age };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (property in object) {
    return true;
  }
  return false;
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = (people) => {
  return people.map((person) => {
    return person.age;
  });
};

const findByName = (name, people) => {
  return people.find((person) => {
    return person.name === name;
  });
};

const findHondas = (cars) => {
  const hondas = cars.filter(obj => obj.manufacturer === 'Honda');
  return hondas;
};

const averageAge = (people) => {
  const agesArray = [];
  for (let i = 0; i < people.length; i++) {
    agesArray.push(people[i].age);
  }
  let totalAge = 0;
  for (let j = 0; j < agesArray.length; j++) {
    totalAge += agesArray[j];
  }
  return totalAge / agesArray.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: (friendsName) => {
      return `Hi ${friendsName}, my name is ${name} and I am ${age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
