const assertEqual = require('./assertEqual');

console.log(assertEqual);


const countLetters = function (sentence) {
  const results = {};

    for (const char of sentence) {
      if (char !== " ") {
        if (results[char])  {
          results[char] += 1;
          } else {
        results[char] = 1;
          }
      }
    }
    return results;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"))

