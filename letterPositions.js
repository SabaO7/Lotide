const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== " ") {
      if (results[char] === undefined) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};

console.log(letterPositions("My name is Potato"));

assertArraysEqual(letterPositions("hello").e, [1]);
