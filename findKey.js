const assertEqual = require('./assertEqual');


const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const result = findKey({
  apple: 1,
  banana: 2,
  orange: 3
}, x => x === 2);

assertEqual(result, 'banana');