const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const output = [];
  for (let i = 0; i < source.length; i++) {
    let match = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (!match) {
      output.push(source[i]);
    }
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
const withoutResult = without(words, ["lighthouse"]);
assertArraysEqual(withoutResult, ["hello", "world"]); // should pass
console.log(withoutResult);
